import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable, Image} from 'react-native';
import Css from '../css'
import CustomButton from '../../Componentes/CustomButton';
import CustomInput from '../../Componentes/CustomInput';
import Voltar from '../../img/voltar.png'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'
import AS_API from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker';

export default function Postagem (){

  const {control, handleSubmit} = useForm();

  const navigation = useNavigation()

  const [image, setImage] = useState(null)

  const [tagName, setTagName] = useState("Selecionar TAG")

  const [imageExists, setImageExists] = useState(false)

  const onPressPostar = async data => {

    const receivedtag = await AS_API.getItem('TagPostagem')
    const tag = parseInt(receivedtag)
    console.log(tag)
    const receivedTagName = await AS_API.getItem('TagPostagemNome')
    const nomeTag = receivedTagName.toString()
    setTagName(nomeTag)

    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`

    try{           
      await fetch(`https://sextans.loca.lt/post`, {
              method: 'POST',
              withCredentials: true,
              credentials: 'include',
              headers: {
          Accept: 'application/json',
          'Authorization': bearer,
          'Content-Type': 'application/json'},
          body: JSON.stringify({
                  title: data.Titulo, 
                  description: data.Texto,
                  tag_id: tag,  
              })
          })
          .then(response => response.json())
          .then(async responseJson => {
              console.log(responseJson)
              const resposta = (JSON.stringify(responseJson))
              if (resposta.includes("tag_id validation failed")){
                alert("Selecione uma TAG!")
                
              }
              else {
                const receivedPostId = responseJson.post_id
                const postId = JSON.stringify(receivedPostId)
                AS_API.setItem('postId', postId)
                navigation.navigate('PostEmDestaque')
                SendImage(postId)
              }
          })
  }
  catch(error){
      console.log(error)
  }
  }

  const sentImage = new FormData()

  const SendImage = async (postIdd) => {
    if (imageExists === true) {

        const receivedToken = await AS_API.getItem('token')
        const token = receivedToken.slice(1,-1)
        const bearer = `Bearer ${token}`
        const receivedPostId = postIdd
        const postId = receivedPostId.toString()

      try{
       await fetch(`https://sextans.loca.lt/post/${postId}/media`, {
            method: 'POST',
            headers: {
          'Authorization': bearer,
          'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'
        },
          body: sentImage
        })
        .then(response => response.json())
        .then(async responseJson => {
            console.log("Reposta envio de imagem: " + responseJson)
        })
    }
      catch(error){
        console.log("Erro ao enviar imagem:" + error)
      }
    }
    else {
        console.log("Não existe imagem")
    }
  }

  const onPressVoltar = () => {
    navigation.goBack()  
  }
  const onPressTagSelect = () =>{
    navigation.navigate('TagSelect')
  }

  const onPressImage = async () => {

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaType: 'photo',
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri);
      sentImage.append('file', {
        type: result.type,
        uri: result.uri,
      });
      setImageExists(true)
    }
    else {
      setImage(null)
      setImageExists(false)
    }
  }

  return (
   <View style={Css.container}>
      <View style={[Css.cabecalho, styles.cabecalho]}>
        <CustomButton text={'Postar'} type="SECONDARY" onPress={handleSubmit(onPressPostar)}/>
        <Pressable onPress={onPressVoltar} style={styles.botaoVoltar}>
          <Image source={Voltar} style={styles.imagemVoltar}></Image>
        </Pressable>
      </View>
      <ScrollView>
        <CustomInput
        name="Titulo"
        placeholder={'Título'}
        placeholderTextColor={'#808080'}
        textStyle='TITLE'
        autoCorrect={true}
        type='SECONDARY'
        maxLength={150}
        control={control}
        />

        <CustomInput
        name="Texto"
        placeholder={'Digite... '}
        placeholderTextColor={'#808080'}
        textStyle='BODY'
        multiline={true}
        autoCorrect={true}
        type='SECONDARY'
        maxLength={2000}
        control={control}
        />
        {image === null ? null :
        <Image resizeMode={'cover'} source={{uri: image}} style={styles.foto}/>}
      </ScrollView>
      <Pressable onPress={onPressTagSelect} style={styles.botao}>
        <Text style={styles.textBotao}>{tagName}</Text>
      </Pressable>
      <View style={styles.anexos}>
        {/* <Pressable onPress={onPressImage}>
          <Feather name='camera' size={35} color={'#FFF'} style={styles.clip}/>
        </Pressable>
        <Pressable>
          <Feather name='camera' size={35} color={'#FFF'} style={styles.camera}/>
        </Pressable> */}
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    marginBottom: 15,
  },
  anexos: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignSelf:'flex-end',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0A5363'
  },
  clip: {
    marginLeft: 50,
  },
  camera: {
    marginLeft: 25,
  },
  botao: {
    height: 36,
    width: 180,
    backgroundColor: '#25252B',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 57,
    marginVertical: 20,
    marginLeft: 20
  },
  textBotao:{
    color: '#8C8C8F',
    fontSize: 18,
    fontWeight: '600',
  },
  imagemVoltar: {
    alignSelf: 'flex-start',
  },
  botaoVoltar: {
    alignSelf: 'flex-start',
    top: -23,
  },
  foto: {
    width: 330,
    height: 330,
    borderRadius: 10,
    alignSelf: 'center',
    marginHorizontal: '5%',
    marginVertical: 20,
  }
})