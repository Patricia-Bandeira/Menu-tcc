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
      fetch ('https://backend-sestante.herokuapp.com/post/saved',{
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
       
         <View key={salvos.id} style={Css.postCard}>
           <TouchableOpacity key={salvos.id} onPress={() => onPressPost(salvos.id)}>
               <Image source={salvos.user.avatar.url === null ? UserBase : salvos.user.avatar.url} style={Css.fotoPerfilPost}/>
               <Text style={Css.nomeDeUsuarioPost}> {salvos.user.name} </Text>
               <Text style={Css.userArrobaPost}> @{salvos.user.username} </Text>
               <Text style={Css.dataPostCorpo}> {salvos.date} </Text>
               <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} activeOpacity={0.2}>
                 <Image source={tresPontos} style={Css.IconTresPontos}/>
               </TouchableOpacity>
               <Text key={salvos.tag.forum.id} style={Css.forumPostCorpo}> #{salvos.tag.forum.name} </Text>
               <Text style={Css.tituloPostCorpo}> {salvos.title} </Text>
                       {salvos.image === null 
               ? <Text style={Css.txtPostCorpo}> {salvos.description_preview} </Text>
               : <Image source={salvos.image.url} style={Css.fotoExemploPost}/>}
               <TouchableOpacity key={salvos.tag.id} activeOpacity={0.7} style={Css.tagPost}>
               <Text key={salvos.tag.id} style={Css.txtTag}> {salvos.tag.name} </Text>
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