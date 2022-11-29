import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from '../css'
import voltar from '../../img/iconVoltar.png'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect  } from 'react';
import UserBase from '../../img/userBase.png';
import tresPontos from '../../img/iconTresPontos.png'
import Like_comentar_salvar from '../../Componentes/Feed/interacoesPosts';
import AS_API from '@react-native-async-storage/async-storage'
import Loading from '../../Componentes/loading';

export default function Salvos (){

  const onPressPost = (id) => {
    const receivedPostId = id
    const postId = JSON.stringify(receivedPostId)
    AS_API.setItem('postId', postId)
    navigation.navigate('PostEmDestaque')
  }

  const [responsePending, setResponsePending] = useState(false)

  const [salvos, setsalvos] = useState([
    {
      "id": null,
      "title": null, 
      "image": null,
      "user": {
      "id": null,
      "name": null,
      "username": null,
      "email": null,
      "avatar": {
        "url": null
      },
      },
      "tag": {
      "id": null,
      "name": null,
      "forum": {
      "id": null,
      "name": null
      }
      },
      "description_preview": null,
      "date": null,
      "saved": null,
      "liked": null
      }
  ])


  const getSalvos = async () => {

    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`
    

    setResponsePending(true)

    try {
      fetch ('https://sextans.loca.lt/post/saved',{
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'},
      })
      .then(response => response.json())
      .then(async responseJson => {
        console.log(responseJson)
        setsalvos(responseJson)
      }
          )
      
    }

    catch (error) {
      console.log(error)
    }
    setResponsePending(false)
  }

  useEffect(() => {
    getSalvos()
  },[] )


  const onPressVoltarPerfil = () =>{
    navigation.navigate('Routes')
  }
  const navigation = useNavigation();

  
    return (

      <View style={Css.container} >
        {responsePending ? <Loading/> : null}
       <View style={Css.cabecalho}>
         <Text style={styles.salvos}>Salvos</Text>
       <TouchableOpacity
             onPress={onPressVoltarPerfil}
             activeOpacity={0.3}
             style={styles.btnIconV}>
             <Image source={voltar} style={styles.icon} />
        </TouchableOpacity>
        </View>
        <ScrollView>
        {salvos.map(salvos => {
           return (
       
         <View key={salvos.post.id} style={Css.postCard}>
           <TouchableOpacity key={salvos.post.id} onPress={() => onPressPost(salvos.post.id)}>
               <Image source={salvos.post.user.avatar.url === null ? UserBase : salvos.post.user.avatar.url} style={Css.fotoPerfilPost}/>
               <Text style={Css.nomeDeUsuarioPost}> {salvos.post.user.name} </Text>
               <Text style={Css.userArrobaPost}> @{salvos.post.user.username} </Text>
               <Text style={Css.dataPostCorpo}> {salvos.post.date} </Text>
               <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} activeOpacity={0.2}>
                 <Image source={tresPontos} style={Css.IconTresPontos}/>
               </TouchableOpacity>
               <Text key={salvos.post.tag.forum.id} style={Css.forumPostCorpo}> #{salvos.post.tag.forum.name} </Text>
               <Text style={Css.tituloPostCorpo}> {salvos.post.title} </Text>
                       {salvos.post.image === null 
               ? <Text style={Css.txtPostCorpo}> {salvos.post.description_preview} </Text>
               : <Image source={salvos.post.image.url} style={Css.fotoExemploPost}/>}
               <TouchableOpacity key={salvos.post.tag.id} activeOpacity={0.7} style={Css.tagPost}>
               <Text key={salvos.post.tag.id} style={Css.txtTag}> {salvos.post.tag.name} </Text>
               </TouchableOpacity>
               <Like_comentar_salvar/>
               </TouchableOpacity>
               </View>
                   )})}
          </ScrollView>
        </View>
        );
}              
                      

const styles = StyleSheet.create({ 
  salvos:{
    width:80,
    height:30,
    top:20,
    alignSelf: 'center',
    color: '#D6D6D6',
    fontSize:25
  },
  btnIconV:{
    alignSelf: 'flex-start',
    top: -8, 
  },
  icon:{
    width: 27,
    height: 27,
  }
})