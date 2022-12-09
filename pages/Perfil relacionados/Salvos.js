import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from '../css'
import voltar from '../../img/iconVoltar.png'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect  } from 'react';
import UserBase from '../../img/userBase.png';
import tresPontos from '../../img/iconTresPontos.png'
import AS_API from '@react-native-async-storage/async-storage'
import Loading from '../../Componentes/loading';
import Comentar from '../../img/iconComentar.png';
import Curtir from '../../img/iconCurtir.png';
import Salvar from '../../img/iconSalvar.png';

export default function Salvos (){
  const [responsePending, setResponsePending] = useState(false)

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


  const onPressSendSave = async id => {
    setResponsePending(true)
    const bool = '0'
    const receivedPostId = id
    const postId = JSON.stringify(receivedPostId)
    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`
  

    try{           
        await fetch(`https://sextans.loca.lt/post/${postId}/saved/${bool}`, {
                method: 'POST',
                withCredentials: true,
                credentials: 'include',
                headers: {
            Accept: 'application/json',
            'Authorization': bearer,
            'Content-Type': 'application/json'},
            body: JSON.stringify({
                    content: bool, 
                })
            })
            .then(response => response.json())
            .then(async responseJson => {
                console.log(responseJson)
            })
    }
    catch(error){
        console.log(error)
    }
    setResponsePending(false)
  }
  
  const onPressSendLike = async id => {
    setResponsePending(true)
    const bool = '0'
    const receivedPostId = id
    const postId = JSON.stringify(receivedPostId)
    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`

    try{           
        await fetch(`https://sextans.loca.lt/post/${postId}/liked/${bool}`, {
                method: 'POST',
                withCredentials: true,
                credentials: 'include',
                headers: {
            Accept: 'application/json',
            'Authorization': bearer,
            'Content-Type': 'application/json'},
            body: JSON.stringify({
                    content: bool, 
                })
            })
            .then(response => response.json())
            .then(async responseJson => {
                console.log(responseJson)
            })
    }
    catch(error){
        console.log(error)
    }
    setResponsePending(false)
  }



  const [salvos, setsalvos] = useState([
    {
      "post": {
        "date": null,
        "description_preview": null,
        "id": null,
        "image": null,
        "liked": null,
        "saved": null,
        "tag": {
          "forum": {
            "id": null,
            "name": null,
          },
          "id": null,
          "name": null,
        },
        "title": null,
        "user": {
          "avatar": null,
          "email": null,
          "id": null,
          "name": null,
          "username": null,
        },
      },
    },
  ])


  const getSalvos = async () => {
    setResponsePending(true)
    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`

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
           <TouchableOpacity onPress={() => onPressPost(salvos.post.id)}>
               <Image source={salvos.post.user.avatar === null ? UserBase : salvos.post.user.avatar.url} style={Css.fotoPerfilPost}/>
               <Text style={Css.nomeDeUsuarioPost}> {salvos.post.user.name} </Text>
               <Text style={Css.userArrobaPost}> @{salvos.post.user.username} </Text>
               <Text style={Css.dataPostCorpo}> {salvos.date} </Text>
               <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} activeOpacity={0.2}>
                 <Image source={tresPontos} style={Css.IconTresPontos}/>
               </TouchableOpacity>
               <Text style={Css.forumPostCorpo}> #{salvos.post.tag.forum.name} </Text>
               <Text style={Css.tituloPostCorpo}> {salvos.post.title} </Text>
                       {salvos.post.image === null 
               ? <Text style={Css.txtPostCorpo}> {salvos.post.description_preview} </Text>
               : <Image source={salvos.post.image.url} style={Css.fotoExemploPost}/>}
               <TouchableOpacity activeOpacity={0.7} style={Css.tagPost}>
               <Text style={Css.txtTag}> {salvos.post.tag.name} </Text>
               </TouchableOpacity>
               <View style={styles.row}>
                  <TouchableOpacity onPress={() => onPressComentar(salvos.post.id)} activeOpacity={0.7}> 
                    <Image source={Comentar} style={Css.iconComentar}/>
                  </TouchableOpacity>
   
                  <TouchableOpacity onPress={() => onPressSendLike(salvos.post.id)} activeOpacity={0.7}>
                      <Image source={Curtir} style={Css.iconCurtir}/>
                  </TouchableOpacity>
        
                  <TouchableOpacity onPress={() => onPressSendSave(salvos.post.id)} activeOpacity={0.7}>
                      <Image source={Salvar} style={Css.iconSalvar} />
                  </TouchableOpacity>
                </View>
               </TouchableOpacity>
               </View>
                   )})}
          </ScrollView>
          {responsePending ? <Loading/> : null}
        </View>
        );
}              
                      

const styles = StyleSheet.create({ 
  row:{
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: '8%',
    marginEnd: '3%',
    marginTop: '-8%'
},
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