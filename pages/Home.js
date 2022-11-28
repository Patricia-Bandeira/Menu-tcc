import {Text, View, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AS_API from '@react-native-async-storage/async-storage'
import PostUm from '../Componentes/Feed/postFeedExemplo1';
import Css from './css'
import Vector from '../img/Vector.png'
import BotaoVerMais from '../img/iconMaisTags.png'
import PostDois from '../Componentes/Feed/postFeedExemplo2.js';
import Loading from '../Componentes/loading';
import { useEffect, useState } from 'react';
import UserBase from '../img/userBase.png'
import tresPontos from '../img/iconTresPontos.png'
import Like_comentar_salvar from '../Componentes/Feed/interacoesPosts';
import css from './css';

export default function Home (){

  const navigation = useNavigation()

  const onPressMaisTags = () => {
    navigation.navigate('TagFolow')
  }

  const [responsePending, setResponsePending] = useState(false)

  const [feed, setFeed] = useState([])

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
        <ScrollView style={styles.row} >
        {feed.map((feed) => {
            return(
                <View key={feed.id} style={Css.postCard}>
                    <TouchableOpacity key={feed.id} onPress={() => onPressPost(feed.id)}>
                        <Image source={feed.user.avatar === null ? UserBase : feed.user.avatar.url} style={Css.fotoPerfilPost}/>
                        <Text style={Css.nomeDeUsuarioPost}> {feed.user.name} </Text>
                        <Text style={Css.userArrobaPost}> @{feed.user.username} </Text>
                        <Text style={Css.dataPostCorpo}> {feed.date} </Text>
                        <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} activeOpacity={0.2}>
                            <Image source={tresPontos} style={Css.IconTresPontos}/>
                        </TouchableOpacity>
                        <Text key={feed.tag.forum.id} style={Css.forumPostCorpo}> #{feed.tag.forum.name} </Text>
                        <Text style={Css.tituloPostCorpo}> {feed.title} </Text>
                        {feed.image === null 
                        ? <Text style={Css.txtPostCorpo}> {feed.description_preview}</Text>
                        : <Image source={feed.image.url} style={Css.fotoExemploPost}/>}
                        <TouchableOpacity key={feed.tag.id} activeOpacity={0.7} style={Css.tagPost}>
                            <Text key={feed.tag.id} style={Css.txtTag}> {feed.tag.name} </Text>
                        </TouchableOpacity>
                        <Like_comentar_salvar onPressComentar={() => onPressComentar(feed.id)}/>
                    </TouchableOpacity>
                </View>
            )
        })} 
        </ScrollView>
    </View>
    {responsePending ? <Loading/> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row:{
          marginBottom: 90,
  }
})