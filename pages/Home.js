import {Text, View, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AS_API from '@react-native-async-storage/async-storage'
import Css from './css'
import Vector from '../img/Vector.png'
import BotaoVerMais from '../img/iconMaisTags.png'
import Loading from '../Componentes/loading';
import { useEffect, useState } from 'react';
import UserBase from '../img/userBase.png'
import tresPontos from '../img/iconTresPontos.png'
import Like_comentar_salvar from '../Componentes/Feed/interacoesPosts';

export default function Home (){

  const navigation = useNavigation()

  const onPressMaisTags = () => {
    navigation.navigate('TagFolow')
  }

  const [responsePending, setResponsePending] = useState(false)

  const [feed, setFeed] = useState([
    // {
    //   "id": null,
		// "title": null,
		// "image": null,
		// "user": {
		// 	"id": null,
		// 	"name": null,
		// 	"username": null,
		// 	"email": null,
		// 	"avatar": null
		// },
		// "tag": {
		// 	"id": null,
		// 	"name": null,
		// 	"forum": {
		// 		"id": null,
		// 		"name": null
		// 	}
		// },
		// "description_preview": null,
		// "date": null,
		// "saved": false,
		// "liked": false
    // }
  ])

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

  const getFeed = async () => {

    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`
    console.log(bearer)

    setResponsePending(true)
    try{
        await fetch('https://sextans.loca.lt/post/feed', {
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
            setFeed(responseJson)
        })
    }
    catch(error){
        console.log(error)
    }
    setResponsePending(false)
  }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    <View style={Css.container}>
        <View style={Css.cabecalho}>
            <Image source={Vector} style={Css.img} />
            <TouchableOpacity
                onPress={onPressMaisTags}
                activeOpacity={0.7}
                style={Css.botaoVerMaisTAG}>
            <Image source={BotaoVerMais} style={Css.IconMaisTags} />
            </TouchableOpacity>
    </View>
    <View>
          <FlatList
          style={styles.row}
          data={feed}
          renderItem={({ item }) => {
            return(
              <View key={item.id} style={Css.postCard}>
                    <TouchableOpacity onPress={() => onPressPost(item.id)}>
                        <Image source={item.user.avatar === null ? UserBase : item.user.avatar} style={Css.fotoPerfilPost}/>
                        <Text style={Css.nomeDeUsuarioPost}> {item.user.name} </Text>
                        <Text style={Css.userArrobaPost}> @{item.user.username} </Text>
                        <Text style={Css.dataPostCorpo}> {item.date} </Text>
                        <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} activeOpacity={0.2}>
                            <Image source={tresPontos} style={Css.IconTresPontos}/>
                        </TouchableOpacity>
                        <Text style={Css.forumPostCorpo}> #{item.tag.forum.name} </Text>
                        <Text style={Css.tituloPostCorpo}> {item.title} </Text>
                        {item.image === null 
                        ? <Text style={Css.txtPostCorpo}> {item.description_preview} </Text>
                        : <Image source={{uri: item.image.url}} style={Css.fotoExemploPost}/>}
                        <TouchableOpacity activeOpacity={0.7} style={Css.tagPost}>
                            <Text style={Css.txtTag}> {item.tag.name} </Text>
                        </TouchableOpacity>
                        <Like_comentar_salvar onPressComentar={() => onPressComentar(item.id)}/>
                    </TouchableOpacity>
                </View>
                )
              }}/>
    </View>
    {responsePending ? <Loading/> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  scroll:{

  }
})