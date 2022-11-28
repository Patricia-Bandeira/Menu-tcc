import React, { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Css from '../../pages/css.js'
import UserBase from '../../img/userBase.png';
import tresPontos from '../../img/iconTresPontos.png';
import Like_comentar_salvar from "./interacoesPosts.js";
import ModalPost from '../../pages/FeedRelacionados/Modal_Den_Del.js';
import { useNavigation } from '@react-navigation/native';
import AS_API from '@react-native-async-storage/async-storage'



export default function PostEmDestaque () {

    const [selectedPost, setSelectedPost] = useState({
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
    }

    useEffect(() => {
        getPost()
    }, [])

    const [visibleModal, setVisibleModal] = useState(false); 

    return (
        <View style={Css.postCard} >
            
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
        activeOpacity={0.2}
        > 
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
    );
}
