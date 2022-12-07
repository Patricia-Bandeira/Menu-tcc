import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from '../css'
import { useForm } from 'react-hook-form';
import Comentar from '../../img/iconComentar.png';
import Salvar from '../../img/iconSalvar.png';
import Vector from '../../img/Vector.png';
import voltar from '../../img/voltar.png';
import { useNavigation } from '@react-navigation/native';
import UserBase from '../../img/userBase.png'
import tresPontos from '../../img/iconTresPontos.png'
import ModalPost from './Modal_Den_Del';
import pontos from '../../img/iconTresPontos.png';
import Curtir from '../../img/iconCurtir.png';
import AS_API from '@react-native-async-storage/async-storage'
import Loading from '../../Componentes/loading';

export default function PostEmDDestaque (){
  const onPressVoltarHome = () =>{
    navigation.navigate('Routes')
}
const navigation = useNavigation();

const onPressComentar = (id) => {
    const receivedPostId = id
    const postId = JSON.stringify(receivedPostId)
    AS_API.setItem('postId', postId)
    navigation.navigate('Comentar')
  }

const [responsePending, setResponsePending] = useState(false)

const [selectedPost, setSelectedPost] = useState({
    "comments": [{
        "content": null,
        "id": null,
        "user": {
            "avatar": {
                "url": null
            },
            "email": null,
            "id": null,
            "name": null,
            "username": null,
        },
    }
    ],
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
      "avatar": {
        "url": null,
      },
      "email": null,
      "id": null,
      "name": null,
      "username": null,
    },
  })
        
const getPost = async () => {

    setResponsePending(true)

    const postId = await AS_API.getItem('postId')
    console.log(postId)
    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`
    
        try{
            await fetch(`https://sextans.loca.lt/post/${postId}/show`, {
                method: 'GET',
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
                setSelectedPost(responseJson)
            })
        }
        catch(error){
            console.log(error)
        }
    
    setResponsePending(false)

    }

useEffect(() => {
    getPost()
}, [])



const onPressSendSave = async id => {
const bool = '1'
const postId = await AS_API.getItem('postId')
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
const postId = await AS_API.getItem('postId')
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

const [visibleModal, setVisibleModal] = useState(false); 

    return (
        <View style={Css.container}>
            {responsePending ? <Loading/> : 
            <>
            <View style={Css.cabecalho}>
                <Image source={Vector} style={Css.img} />  
                <TouchableOpacity onPress={onPressVoltarHome}
                activeOpacity={0.3}
                style={Css.btnIconVoltar}>
                    <Image source={voltar} style={Css.iconVoltar} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.viewScroll}>
                <View style={Css.postCard}>
                    <View 
                    //informação do users
                    activeOpacity={0.7}>
                        <Image source={selectedPost.user.avatar === null ? UserBase :selectedPost.user.avatar.url} style={Css.fotoPerfilPost}/>
                        <Text style={Css.nomeDeUsuarioPost}>{selectedPost.user.name}</Text>
                        <Text style={Css.userArrobaPost} >@{selectedPost.user.username}</Text>
                        <Text style={Css.dataPostCorpo} >{selectedPost.date}</Text>
                        <TouchableOpacity
                        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} 
                        onPress={() => setVisibleModal(true)} 
                        activeOpacity={0.2}> 
                            {/* botao tres pontos */}
                            <Image source={tresPontos} style={Css.IconTresPontos}/>
                        </TouchableOpacity>
                        <ModalPost
                        setVisibleModal={setVisibleModal}
                        visibleModal={visibleModal}
                        ativar={true}
                        />
                        {/* corpo do post */} 
                        <Text style={Css.forumPostCorpo} >#{selectedPost.tag.forum.name}</Text>
                        <Text style={Css.tituloPostCorpo}>{selectedPost.title}</Text>
                        <Text style={Css.txtPostCorpo}>{selectedPost.description}</Text>
                        {selectedPost.image === null ? null :
                        <Image source={{uri: selectedPost.image.url}} style={Css.fotoExemploPost}/>
                    }
                        <TouchableOpacity
                        //botao da  TAG 
                        activeOpacity={0.7}
                        style={Css.tagPost}>
                            <Text style={Css.txtTag}>{selectedPost.tag.name}</Text>
                        </TouchableOpacity>
                   
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => onPressComentar(selectedPost.id)} activeOpacity={0.7}> 
                              <Image source={Comentar} style={Css.iconComentar}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => onPressSendLike(selectedPost.id)}  activeOpacity={0.7}>
                                 <Image source={Curtir} style={Css.iconCurtir}/>
                            </TouchableOpacity>

                                <TouchableOpacity onPress={() => onPressSendSave(selectedPost.id)} activeOpacity={0.7}>
                                   <Image source={Salvar} style={Css.iconSalvar} />
                                </TouchableOpacity>
                    </View>

                    </View>
                </View>
                {selectedPost.comments === null 
                ? null
                : selectedPost.comments.map(comments => {
                    return(
                        <View style={styles.containerComent}>
                            <View style={styles.container}>
                            <View style={styles.miniPerfilView}>
                                <Image source={comments.user.avatar === null ? UserBase : comments.user.avatar.url} style={styles.miniPerfil} />
                            </View>
                            <Text style={styles.nomeDeUsuarioPost}>{comments.user.name}</Text>
                            <Text style={styles.userArrobaPost}>@{comments.user.username}</Text>
                            <Text style={styles.dataPostCorpo}>11/10/2022</Text>
                            <TouchableOpacity style={styles.btnTresView}
                            activeOpacity={0.2} 
                            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} 
                            onPress={() => setVisibleModal(true)}>
                                <Image source={pontos} style={styles.IconTresPontos} />
                            </TouchableOpacity>
                            </View>
                            <ModalPost
                            setVisibleModal={setVisibleModal}
                            visibleModal={visibleModal}
                            ativar={true}
                            />     
                            <Text style={styles.txtPostCorpo}>{comments.content}</Text>
                            <TouchableOpacity style={styles.btnLikeView} activeOpacity={0.7}>
                                <Image source={Curtir} style={styles.iconCurtir} />
                            </TouchableOpacity>
                        </View>
                    )
                })                   
            }
            </ScrollView>
            </>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    containerComent:{
         backgroundColor: '#000',
         width: '100%',
         height: 200 ,
         borderColor: 'white',
         borderBottomWidth: 0.5,
    },
    btnTresView:{
        position: 'absolute',
        left: 340,
        top: 20
    },
    btnTresView:{
        marginTop:20,
        left:340,
        position:'absolute'
    },
    btnLikeView:{
        position: 'absolute',
        left: 340,
        top: 80

    },
    container:{
        backgroundColor: '#000',
        flexDirection: 'row',
         width: '100%',
         height: '45%' ,
         alignItems: 'flex-start',
         flexDirection: 'row',
   },
    miniPerfilView: {
         width: 52,
         height: 52,
         borderRadius: 20,
         left: 15,
         top: 10
    },
    miniPerfil: {
         width: '100%',
         height: '100%',
         borderRadius: 50,
    },
    nomeDeUsuarioPost: {
         fontWeight: 'bold',
         fontSize: 15,
         color: '#fff',
         left: 20,
         top: 18
    },
    dataPostCorpo:{
         color: '#D6D6D6',
         opacity: 0.5,
         fontStyle: 'normal',
         top: 20,
         flexDirection:'row-reverse',
         left: 260,
         position:"absolute"

    },
    userArrobaPost:{
         color: '#D6D6D6',
         opacity: 0.5,
         fontStyle: 'normal',
         top:38,
         left:72,
        position: 'absolute'

         
    },
    IconTresPontos:{
         width: 27,
         height: 27,
         
    },
    txtPostCorpo:{
         color: '#d6d6d6',
         textAlign:'justify',
         top:'2%',
         left:55,
         marginRight:120,
         marginBottom: '2%'

    },
    iconCurtir:{
         width: 22,
         height: 23,
    },
    row:{
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginBottom: '8%',
        marginEnd: '3%',
        marginTop: '-8%'
    }
})