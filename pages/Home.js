import {View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
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

export default function Home (){

  const navigation = useNavigation()

  const onPressMaisTags = () => {
    navigation.navigate('TagFolow')
  }

  const [responsePending, setResponsePending] = useState(false)

  const [feed, setFeed] = useState([])

  const getFeed = async () => {

    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`
    console.log(bearer)

    setResponsePending(true)
    try{
        await fetch('https://backend-sestante.herokuapp.com/post/feed', {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                // Accept: 'application/json',
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
  }, [0])

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
                <>
                <View key={feed.id} style={Css.postCard}>
                    <TouchableOpacity key={feed.id}>
                    {feed['user'].map((user) => {
                        return(
                            <>
                            {user.avatar.map((avatar) => {
                                return(
                                    <Image key={user.id} source={avatar.url === null ? UserBase : avatar.url} style={Css.fotoPerfilPost}/>
                                )
                            })}
                            <Text key={user.id} style={Css.nomeDeUsuarioPost}> {user.name} </Text>
                            <Text key={user.id} style={Css.userArrobaPost}> @{user.username} </Text>
                            </>
                        )
                    })}
                        <Text key={feed.id} style={Css.dataPostCorpo}> {feed.date} </Text>
                        <TouchableOpacity key={feed.id} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} onPress={alert("apertou!")} activeOpacity={0.2}>
                            <Image key={feed.id} source={tresPontos} style={Css.IconTresPontos}/>
                        </TouchableOpacity>
                    {feed.tag.map((tag) => {
                        return(
                            tag.forum.map((forum) => {
                                return(
                                    <Text key={forum.id} style={Css.forumPostCorpo}> #{forum.name} </Text>
                                )
                            })
                        )
                    })}
                        <Text key={feed.id} style={Css.tituloPostCorpo}> {feed.title} </Text>
                        <Text key={feed.id} style={Css.txtPostCorpo}> {feed.description_preview} </Text>
                    {feed.image.map((image) => {
                        return(
                            <Image key={feed.id} source={image.url} style={Css.fotoExemploPost}/>
                        )
                    })}
                    {feed.tag.map((tag) => {
                        return(
                        <TouchableOpacity key={tag.id} activeOpacity={0.7} style={Css.tagPost}>
                            <Text key={tag.id} style={Css.txtTag}> {tag.name} </Text>
                        </TouchableOpacity>
                        )
                    })}
                    </TouchableOpacity>
                    <Like_comentar_salvar/>
                </View>
                <PostUm/>
                <PostDois/>
                <PostUm/>
                <PostDois/>
                <PostDois/>
                <PostUm/> 
                </>
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