import {Text, View, Image, ScrollView } from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import userIcon from '../img/userBase.png';
import nadaPorAqui from '../img/nadpAquiNotifi.png'
import Container_notificacao from '../Componentes/componente.notificacao';
import { useState } from 'react';

export default function Notificacao (){

    const [notifications, setNotifications] = useState([])

    const GetNotfication = async () => {

        const receivedToken = await AS_API.getItem('token')
        const token = receivedToken.slice(1,-1)
        const bearer = `Bearer ${token}`
        
            try{
                await fetch(`https://backend-sestante.herokuapp.com/user/notification`, {
                    method: 'DELETE',
                    withCredentials: true,
                    credentials: 'include',
                    headers: {
                        'Authorization': bearer,
                        'Content-Type': 'application/json'
                    },
                })
                .then(response => response.json())
                .then(async responseJson => {
                    console.log(responseJson)
                    setNotifications(responseJson)
                })
            }
            catch(error){
                console.log(error)
            }
    }
    return (
        <View style={Css.container}>
            <View style={Css.cabecalho}>
                <Image source={Vector} style={Css.img}/>
            </View>
            {notifications === null ?
            <View style={Css.nadaPorAquipngView}>
            <Image
             source={nadaPorAqui} 
             style={Css.nadaPorAquipng}
             />
            </View>
            :
            <ScrollView>
                <View style={Css.card} >
                    <View style={Css.miniPerfilView}>
                        <Image
                        style={Css.miniPerfil}
                        source={userIcon}
                        />
                    </View>
                    <Text style ={Css.nomeDeUsuario}>@Usuario123</Text>        
                    <Text style ={Css.corponotifiacao}>Curtiu sua postagem</Text>
                </View>
                {/* <Container_notificacao/>
                <Container_notificacao/>
                <Container_notificacao/> */}
            </ScrollView>
          }
         </View>
  ); 
}