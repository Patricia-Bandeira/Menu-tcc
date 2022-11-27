import {View, Image, ScrollView, Text } from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import nadaPorAqui from '../img/nadpAquiNotifi.png'
import Container_notificacao from '../Componentes/componente.notificacao';
import AS_API from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';
import Loading from '../Componentes/loading';

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
      fetch ('https://backend-sestante.herokuapp.com/user/notification',{
        method: 'DELETE',
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
          <View>
          {notification.map(notification => {
            return(
          <ScrollView>
          <View key={notification.id} style={Css.card} >
            <View style={Css.miniPerfilView}>
                <Image
                style={Css.miniPerfil}
                source={notification.avatar === null ? userIcon : notification.avatar}
                />
            </View>
            <Text style ={Css.nomeDeUsuario}>@{notification.user_reference.username}</Text>
            <Text style ={Css.corponotifiacao}>{notification.description}</Text>
            <Text>{notification.date}</Text>
            <Text>{notification.user_reference.name}</Text>
            <Text>{notification.user_reference.email}</Text>
        </View>
          </ScrollView>
            )
          })}
          </View>
          }
          {responsePending ? <Loading/> : null}
         </View>

  );
    

}