import {View, Image, ScrollView, Text, StyleSheet } from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import nadaPorAqui from '../img/nadpAquiNotifi.png'
import AS_API from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';
import Loading from '../Componentes/loading';
import userBase from '../img/userBase.png'

export default function Notificacao (){

  const [responsePending, setResponsePending] = useState(false)

  const [notification, setNotification] = useState([
    {
      "description": null,
      "user_reference": {
      "id": null,
      "name": null,
      "username": null,
      "email": null,
      "avatar": null,
      },
      "date": null,
      }
  ])

  const getNotification = async () => {

    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`
    

    setResponsePending(true)

    try {
      fetch ('https://sextans.loca.lt/user/notification',{
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
        setNotification(responseJson)
      }
          )
      
    }

    catch (error) {
      console.log(error)
    }
    setResponsePending(false)
  }

  useEffect(() => {
    getNotification()
  },[] )

  return (
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img}/>
          </View>
          {notification.message === "E_ROUTE_NOT_FOUND: Cannot DELETE:/user/notification" ?
            <View style={Css.nadaPorAquipngView}>
            <Image
             source={nadaPorAqui} 
             style={Css.nadaPorAquipng}
             />
            </View>
            :
          <ScrollView style={styles.notifCard}>
          {notification.map(notification => {
            return(
          <View key={notification.id} style={styles.card} >
            <View style={styles.miniPerfilView}>
                <Image
                style={Css.miniPerfil}
                source={userBase}
                />
            </View>
            <Text numberOfLines={1} style={styles.corponotifiacao}>  {notification.description < 50 ? `${notification.description}` : `${notification.description.substring(0, 47)}...`}</Text>
            <Text style={styles.date} >{notification.date}</Text>
        </View>
            )
          })}
          </ScrollView>
          }
          {responsePending ? <Loading/> : null}
         </View>

  );
    

}

const styles = StyleSheet.create({
  nomeDeUsuario: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
  corponotifiacao: {
    fontWeight: '350',
    fontSize: 12,
    color: '#fff',
    left: 40,
    bottom:40
  },
  card: {
    height:'15%',
    backgroundColor: '#000',
    padding: 20,
    borderColor: "#fff",
    borderBottomWidth: 0.5,
    alignItems:'flex-start',
  },
    date:{
      color: '#D6D6D6',
      opacity: 0.5,
      fontSize: 10,
    alignSelf:'flex-end',
    bottom:32
  },
  miniPerfilView: {
    width: 52,
    height: 52,
    borderRadius: 20,
    right:10
    
  },
})