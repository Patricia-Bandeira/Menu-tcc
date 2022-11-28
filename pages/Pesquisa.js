import {Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import {Feather} from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import CustomButton from '../Componentes/CustomButton';
import { useNavigation } from '@react-navigation/native';
import AS_API from '@react-native-async-storage/async-storage'
import UserBase from '../img/userBase.png'
import tresPontos from '../img/iconTresPontos.png'
import Like_comentar_salvar from '../Componentes/Feed/interacoesPosts';
import Loading from '../Componentes/loading';
import Voltar from '../img/voltar.png'

export default function Pesquisa (){

  const [pesquisa, setPesquisa] = useState('')

  const [results, setResults] = useState([])

  const [searched, setSearched] = useState(false)

  const navigation = useNavigation()

  const onPressMatemtatica = () =>{
    navigation.navigate('ForumMatematica')
  }
  const onPressPortugues = () =>{
    navigation.navigate('ForumPortugues')
  }
  const onPressLiteratura = () =>{
    navigation.navigate('ForumLiteratura')
  }
  const onPressHistoria = () =>{
    navigation.navigate('ForumHistoria')
  }
  const onPressGeografia = () =>{
    navigation.navigate('ForumGeografia')
  }
  const onPressFilosofia = () =>{
    navigation.navigate('ForumFilosofia')
  }
  const onPressSociologia = () =>{
    navigation.navigate('ForumSociologia')
  }
  const onPressQuimica = () =>{
    navigation.navigate('ForumQuimica')
  }
  const onPressFisica = () =>{
    navigation.navigate('ForumFisica')
  }
  const onPressBiologia = () =>{
    navigation.navigate('ForumBiologia')
  }
  const onPressLinguas_Estrangeiras = () =>{
    navigation.navigate('ForumLinguas_Estrangeiras')
  }

  const onPressPost = (id) => {
    const receivedPostId = id
    const postId = JSON.stringify(receivedPostId)
    AS_API.setItem('postId', postId)
    navigation.navigate('PostEmDestaque')
  }

  const onPressComentar = (id) => {
    const receivedPostId = id
    const postId = JSON.stringify(receivedPostId)
    AS_API.setItem('postId', postId)
    navigation.navigate('Comentar')
  }

  const onPressVoltar = () => {
    setSearched(false)
  }
  
  const onPressSearch = async () => {

    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`

    try{
      await fetch('https://sextans.loca.lt/user/search', {
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          term: pesquisa, 
        })
      })
      .then(response => response.json())
      .then(async responseJson => {
        console.log(responseJson)
        setSearched(true)
        setResults(responseJson)
      })
    }
    catch(error){
      console.log(error)
    }

  }

  return (
   <View style={Css.container}>
   
    <View style={styles.pesquisaCabecalho}>
      {searched ?
      <Pressable onPress={onPressVoltar} style={styles.botaoVoltar}>
        <Image source={Voltar} style={styles.imagemVoltar}></Image>
      </Pressable> 
      : null}
      <Image source={Vector} style={Css.img} />
      <View style={styles.containerTextInput}>
        <Feather name='search' size={20} style={styles.inconTextInput}/>
        <TextInput 
        style={styles.textInput}
        placeholder={'Buscar...'}
        onChangeText={setPesquisa}
        onSubmitEditing={() => onPressSearch()}
        >{pesquisa}
        </TextInput>
      </View>
    </View>
    <ScrollView>
      {searched ? results.map(results => {
        return(
        <View key={results.id} style={Css.postCard}>
        <TouchableOpacity key={results.id} onPress={() => onPressPost(results.id)}>
            <Image source={results.user.avatar === null ? UserBase : results.user.avatar.url} style={Css.fotoPerfilPost}/>
            <Text style={Css.nomeDeUsuarioPost}> {results.user.name} </Text>
            <Text style={Css.userArrobaPost}> @{results.user.username} </Text>
            <Text style={Css.dataPostCorpo}> {results.date} </Text>
            <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} activeOpacity={0.2}>
                <Image source={tresPontos} style={Css.IconTresPontos}/>
            </TouchableOpacity>
            <Text key={results.tag.forum.id} style={Css.forumPostCorpo}> #{results.tag.forum.name} </Text>
            <Text style={Css.tituloPostCorpo}> {results.title} </Text>
            {results.image === null 
            ? <Text style={Css.txtPostCorpo}> {results.description_preview} </Text>
            : <Image source={results.image.url} style={Css.fotoExemploPost}/>}
            <TouchableOpacity key={results.tag.id} activeOpacity={0.7} style={Css.tagPost}>
                <Text key={results.tag.id} style={Css.txtTag}> {results.tag.name} </Text>
            </TouchableOpacity>
            <Like_comentar_salvar onPressComentar={() => onPressComentar(results.id)}/>
        </TouchableOpacity>
        </View>
        )
      }) : 
      <View style={styles.container}>
        <Text style={styles.text}>Fóruns</Text>
        <View style={styles.containerForuns}>
          <CustomButton
          onPress={onPressMatemtatica}
          text={'Matematica'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressPortugues}
          text={'Português'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressLiteratura}
          text={'Literatura'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressHistoria}
          text={'História'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressGeografia}
          text={'Geografia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressFilosofia}
          text={'Filosofia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressSociologia}
          text={'Sociologia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressQuimica}
          text={'Química'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressFisica}
          text={'Física'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressBiologia}
          text={'Biologia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressLinguas_Estrangeiras}
          text={'Linguas Estrangeiras'}
          type={'QUARTENARY_SPECIAL'}
          />
        </View>
      </View>
      }
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pesquisaCabecalho:{
    backgroundColor: '#0A5363',
    alignSelf:'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  containerTextInput: {
    marginBottom: 10,
    flexDirection: 'row',
    marginVertical: 50,
    backgroundColor: '#D6D6D6',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 57,
    width: '80%',
  },
  textInput: {
    flex: 1,
  },
  inconTextInput: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  container:{
    width: '90%',
    alignSelf: 'center'
  },
  containerForuns:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    left: 15,
    fontSize: 50,
    fontWeight: '700',
    color: '#FFFFFF',
    marginVertical: 25,
  },
  imagemVoltar: {
    alignSelf: 'flex-start',
  },
  botaoVoltar: {
    alignSelf: 'flex-start',
    top: 55,
  },
})