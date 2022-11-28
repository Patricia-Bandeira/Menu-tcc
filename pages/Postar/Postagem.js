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

  const onPressPostar = async data => {

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
                  tag_id: 1,  
              })
          })
          .then(response => response.json())
          .then(async responseJson => {
              console.log(responseJson)
              navigation.navigate('PostEmDestaque')
          })
  }
  catch(error){
      console.log(error)
  }
  }

  const onPressVoltar = () => {
    navigation.goBack()  
  }
  const onPressTagSelect = () =>{
    navigation.navigate('TagSelect')
  }

  const onPressImage = async () => {
    // const options = {
    //   mediaType: 'photo'
    // }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaType: 'photo',
      quality: 1,
    })

    // setImage("@expo/snack-static/react-native-logo.png")
    console.log(result)

    if (!result.canceled) {
      setImage(result.uri);
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
        <Text style={styles.textBotao}>Selecionar TAG</Text>
      </Pressable>
      <View style={styles.anexos}>
        <Pressable onPress={onPressImage}>
          <Feather name='paperclip' size={35} color={'#FFF'} style={styles.clip}/>
        </Pressable>
        <Pressable>
          <Feather name='camera' size={35} color={'#FFF'} style={styles.camera}/>
        </Pressable>
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
    marginHorizontal: '5%',
    marginVertical: 20,
  }
})