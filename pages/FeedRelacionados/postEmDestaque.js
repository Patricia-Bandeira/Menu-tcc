import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from '../css'
import ComentarioPostDestaque from '../../Componentes/Feed/comentarioExemplo.js';
import PostEmDestaque from '../../Componentes/Feed/postDestaqueExemplo.js';
import Vector from '../../img/Vector.png';
import voltar from '../../img/voltar.png';
import { useNavigation } from '@react-navigation/native';
import UserBase from '../../img/userBase.png'
import tresPontos from '../../img/iconTresPontos.png'
import Like_comentar_salvar from '../../Componentes/Feed/interacoesPosts';
import ModalPost from './Modal_Den_Del';
import pontos from '../../img/iconTresPontos.png';
import Curtir from '../../img/iconCurtir.png';
import AS_API from '@react-native-async-storage/async-storage'

export default function PostEmDDestaque (){
  const onPressVoltarHome = () =>{
    navigation.navigate('Routes')
}
const navigation = useNavigation();

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

    const postId = await AS_API.getItem('postId')
    console.log(postId)
    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`
    
        try{
            await fetch(`https://backend-sestante.herokuapp.com/post/${postId}/show`, {
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
    }

useEffect(() => {
    getPost()
}, [])

const [visibleModal, setVisibleModal] = useState(false); 

    return (
        <View style={Css.container}>
            <View style={Css.cabecalho}>
                <Image source={Vector} style={Css.img} />  
                <TouchableOpacity onPress={onPressVoltarHome}
                activeOpacity={0.3}
                style={Css.btnIconVoltar}>
                    <Image source={voltar} style={Css.iconVoltar} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={Css.postCard}>
                    <View 
                    //informação do users
                    activeOpacity={0.7}>
                        <Image source={selectedPost.user.avatar.url === null ? UserBase :selectedPost.user.avatar.url} style={Css.fotoPerfilPost}/>
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
                        <Image source={selectedPost.image.url} style={Css.fotoExemploPost}/>
                        }
                        <TouchableOpacity
                        //botao da  TAG 
                        activeOpacity={0.7}
                        style={Css.tagPost}>
                            <Text style={Css.txtTag}>{selectedPost.tag.name}</Text>
                        </TouchableOpacity>
                        <Like_comentar_salvar/>
                    </View>
                </View>
                {selectedPost.comments === null 
                ? null
                : selectedPost.comments.map(comments => {
                    return(
                        <View style={styles.container}>
                            <View style={styles.miniPerfilView}>
                                <Image source={comments.user.avatar === null ? UserBase : comments.user.avatar.url} style={styles.miniPerfil} />
                            </View>
                            <Text style={styles.nomeDeUsuarioPost}>{comments.user.name}</Text>
                            <Text style={styles.userArrobaPost}>@{comments.user.username}</Text>
                            <Text style={styles.dataPostCorpo}>11/10/2022</Text>
                            <TouchableOpacity 
                            activeOpacity={0.2} 
                            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} 
                            onPress={() => setVisibleModal(true)}>
                                <Image source={pontos} style={styles.IconTresPontos} />
                            </TouchableOpacity>
                            <ModalPost
                            setVisibleModal={setVisibleModal}
                            visibleModal={visibleModal}
                            ativar={true}
                            />     
                            <Text style={styles.txtPostCorpo}>{comments.content}</Text>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image source={Curtir} style={styles.iconCurtir} />
                            </TouchableOpacity>
                        </View>
                    )
                })                   
                }
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
         backgroundColor: '#000',
         borderColor: 'white',
         borderBottomWidth: 0.3,
         alignItems: 'flex-start',
         flexDirection: 'row',
         flexWrap: 'wrap',
    },
    miniPerfilView: {
         width: 52,
         height: 52,
         borderRadius: 20,
         marginLeft: '5%',
         marginTop:'5%'
    },
    miniPerfil: {
         width: '100%',
         height: '100%',
         borderRadius: 50,
    },
    nomeDeUsuarioPost: {
         marginTop:'5%',
         left: '0.5%',
         fontWeight: 'bold',
         fontSize: 15,
         color: '#fff',
    },
    dataPostCorpo:{
         color: '#D6D6D6',
         opacity: 0.5,
         alignSelf: 'flex-end',
         fontSize: 10,
         fontStyle: 'normal',
         marginBottom: '8%',
         marginLeft: '45%'
    },
    userArrobaPost:{
         color: '#D6D6D6',
         opacity: 0.5,
         alignSelf: 'flex-start',
         fontStyle: 'normal',
         fontSize: 15,
         marginTop:'9.5%',
         marginLeft:'-30%',
         
    },
    IconTresPontos:{
         width: 27,
         height: 27,
         alignSelf: 'flex-end',
         marginTop: '70%',

    },
    txtPostCorpo:{
         color: '#D1D1D1',
         marginLeft: '5%',
         marginRight: '5%',
         marginEnd:'5%',
         marginTop:'5%',
         marginBottom: '5%',
         textAlign:'justify'
    },
    iconCurtir:{
         width: 22,
         height: 23,
         marginLeft:'85%',
         alignSelf: 'flex-end',
         marginBottom:'6%'
    },
})