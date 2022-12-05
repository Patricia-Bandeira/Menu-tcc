import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, Modal} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import { Feather } from '@expo/vector-icons'; 
import UserBase from '../img/userBase.png';
import { useNavigation } from '@react-navigation/native';
import AS_API from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import tresPontos from '../img/iconTresPontos.png';
import Loading from '../Componentes/loading';
import Comentar from '../img/iconComentar.png';
import Curtir from '../img/iconCurtir.png';
import Salvar from '../img/iconSalvar.png';

export default function Perfil (){
const [visibleModal, setVisibleModal] = useState(false); 
const [responsePending, setResponsePending] = useState(false)

const onPressConfiguracoes = () =>{
  navigation.navigate('Configurações')
}
  const onPressSalvos = () =>{
    navigation.navigate('Salvos')
  }
  const onPressEditarPerfil = () =>{
    navigation.navigate('EditarPerfil')
  }
  const navigation = useNavigation();

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
    const bool = '1'
    const receivedPostId = id
    const postId = JSON.stringify(receivedPostId)
    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`
  
    setResponsePending(true)
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
    const bool = '1'
    const receivedPostId = id
    const postId = JSON.stringify(receivedPostId)
    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`
  
    setResponsePending(true)
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


  const [userInfo, setUserInfo] = useState([{
    "avatar": {
			"url": null
		},
    "email": null,
    "id": null,
    "name": null,
    "username": null,
  },])


    const getUserInfo = async () => {
  
      const receivedToken = await AS_API.getItem('token')
      const token = receivedToken.slice(1,-1)
      const bearer = `Bearer ${token}`
      
  
      setResponsePending(true)
  
      try {
        fetch ('https://sextans.loca.lt/user/require',{
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
          setUserInfo(responseJson)
        }
            )
        
      }
  
      catch (error) {
        console.log(error)
      }
      setResponsePending(false)
    }

    useEffect(() => {
      getUserInfo()
    },[] )

    
  const [userPosts, setUserPosts] = useState([{
    
      "id": null,
      "title": null, 
      "image": null,
      "user": {
      "id": null,
      "name": null,
      "username": null,
      "email": null,
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
      },])


    const getUserPosts = async () => {
  
      const receivedToken = await AS_API.getItem('token')
      const token = receivedToken.slice(1,-1)
      const bearer = `Bearer ${token}`
      
  
      setResponsePending(true)
  
      try {
        fetch ('https://sextans.loca.lt/post/myself',{
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
          console.log("// TELA DE PERFIL //")
          setUserPosts(responseJson)
        }
            )
        
      }
  
      catch (error) {
        console.log(error)
      }
      setResponsePending(false)
    }

    useEffect(() => {
      getUserPosts()
    },[] )

    

  return (
    
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />
    </View>

   
    {userInfo.map(UserInfo => {
      return(
     <View style={styles.ViewPerfil}>
      <View key={UserInfo.id} style={{alignSelf:'center',alignContent:'center'}}> 
        <Image source={UserInfo.avatar === null ? UserBase : UserInfo.avatar.url} style={styles.fotoPerfil}/>
      </View>

      <Text style={styles.nomeUser}>{UserInfo.name}</Text> 
      <Text style={styles.arrobaUser}>@{UserInfo.username}</Text> 

      <TouchableOpacity onPress={onPressEditarPerfil} style={styles.editarPerfilbtn}> 
       <Text style={styles.editarPerfiltxt}>Editar perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.btnMaisOps} 
       onPress={() => setVisibleModal(true)}>
      <Feather name="more-horizontal" size={38} color={'#D3D3D3'}/> 
      </TouchableOpacity>
     </View>
)})}
    <ScrollView>

      {userPosts.map(userPosts => {
           return (
       
         <View key={userPosts.id} style={Css.postCard}>
           <TouchableOpacity onPress={() => onPressPost(userPosts.id)}>
               <Text style={styles.dataPostCorpo}> {userPosts.date} </Text>
               <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} activeOpacity={0.2}>
                 <Image source={tresPontos} style={styles.IconTresPontos}/>
               </TouchableOpacity>
               <Text style={styles.forumPostCorpo}> #{userPosts.tag.forum.name} </Text>
               <Text style={Css.tituloPostCorpo}> {userPosts.title} </Text>
                       {userPosts.image === null 
               ? <Text style={Css.txtPostCorpo}> {userPosts.description_preview} </Text>
               : <Image source={userPosts.image.url} style={Css.fotoExemploPost}/>}
               <TouchableOpacity activeOpacity={0.7} style={Css.tagPost}>
               <Text style={Css.txtTag}> {userPosts.tag.name} </Text>
               </TouchableOpacity>    
               <View style={styles.row}>
                  <TouchableOpacity onPress={() => onPressComentar(userPosts.id)} activeOpacity={0.7}> 
                    <Image source={Comentar} style={Css.iconComentar}/>
                  </TouchableOpacity>
   
                  <TouchableOpacity onPress={() => onPressSendLike(userPosts.id)} activeOpacity={0.7}>
                      <Image source={Curtir} style={Css.iconCurtir}/>
                  </TouchableOpacity>
        
                  <TouchableOpacity onPress={() => onPressSendSave(userPosts.id)} activeOpacity={0.7}>
                      <Image source={Salvar} style={Css.iconSalvar} />
                  </TouchableOpacity>
                </View>
               </TouchableOpacity>
               </View>
                   )})}
    </ScrollView>

     <Modal
        animationType="fade"
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}>
          <TouchableOpacity style={styles.ViewModal} onPress={() => {setVisibleModal({ modalVisible : false})}}>
          <TouchableOpacity onPress={onPressSalvos} style={styles.btnModal}> 
            <Text style={styles.TxtModal}>Salvos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressConfiguracoes} style={styles.btnModal}> 
            <Text style={styles.TxtModal}>Configurações</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
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
  ViewPerfil:{  
    alignItems:'center',
    backgroundColor:'black', 
    height:210, 
    width:'100%',
    borderBottomColor:'#d1d1d1',
    borderWidth:0.3,
  },
  fotoPerfil:{
    width: 120,
    height: 120,
    marginTop: '5%',
    alignSelf:'center',
  
  },
  nomeUser:{
    color:'#ffffff',
    textAlign:'center',
    fontSize:18,
    marginTop:3,
    alignSelf:'center',

  },
  arrobaUser:{
    color:'#808080',
    textAlign:'center',
    fontSize:12,
    marginTop:-3,
    alignSelf:'center',
  },
  editarPerfilbtn:{
    backgroundColor:'#000',
    height:35,
    width:120,
    marginLeft:255,
    marginTop:-90,
    borderRadius:90,
    borderWidth:1,
    borderColor:'#d6d6d6',
    justifyContent:'center'
  },
  editarPerfiltxt:{
    color:'#d6d6d6',
    alignSelf:'center',
},
btnMaisOps:{
  backgroundColor:'black',
   borderWidth:1,
  borderColor:'#d6d6d6',
  borderRadius:100,
  width:40,
  height:40,
  marginTop:-100,
  marginLeft:302
},
ViewModal:{
  width: '100%',
  height: '100%',
  alignItems:'center'
},
btnModal:{ 
  width: 120,
  backgroundColor: "#111",
  height:40,
  marginRight:20,
  alignSelf:'flex-end'
},
TxtModal:{
  textAlign:'center',
  marginTop:10,
  color:'#ffffff'
},
modalClose:{
  width:'100%',
  height:'100%'
},
forumPostCorpo:{
  color: '#D6D6D6',
  left:10,
  bottom: 15
},
IconTresPontos:{
  width: 27,
  height: 27,
  alignSelf:'flex-end',
  marginRight:10,
  top:10
},
dataPostCorpo:{
  color: '#D6D6D6',
  opacity: 0.5,
  fontSize: 10,
  fontStyle: 'normal',
  alignSelf: 'flex-end',
  marginRight: 30,
  top:28
},
})