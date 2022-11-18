import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Css from '../../pages/css.js'
import UserBase from '../../img/userBase.png';
import tresPontos from '../../img/iconTresPontos.png';
import Like_comentar_salvar from "./interacoesPosts.js";
import ModalPost from '../../pages/FeedRelacionados/Modal_Den_Del.js';


export default function PostEmDestaque () {

    const [visibleModal, setVisibleModal] = useState(false); 

    return (
        <View style={Css.postCard} >
            
        <View 
        //informação do users
            activeOpacity={0.7}>

        <Image source={UserBase} style={Css.fotoPerfilPost}/>
        <Text style={Css.nomeDeUsuarioPost}>Nome Sobrenome</Text>
        <Text style={Css.userArrobaPost} >@fulaninho</Text>
        <Text style={Css.dataPostCorpo} >10/10/2022</Text>

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
  
        <Text style={Css.forumPostCorpo} >#Fórum</Text>
        <Text style={Css.tituloPostCorpo}> Titulo</Text>
        <Text style={Css.txtPostCorpo}  >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non tellus eget diam fringilla lacinia eu sit amet risus. Maecenas risus erat, tempus vitae lacinia at, maximus in felis. Morbi ullamcorper nulla sed nibh lobortis mattis. Vestibulum fermentum justo at ligula malesuada, vel malesuada arcu rhoncus. Phasellus dolor est, imperdiet at tellus vel, posuere porta lacus. Duis sit amet aliquet mauris. Maecenas dictum neque nec erat blandit, vitae feugiat nunc posuere. Maecenas lobortis lobortis odio, vel dictum justo sodales nec. Morbi consectetur ex dapibus, vulputate neque vitae, vulputate purus. Etiam vulputate eget lacus sit amet porta. Sed sapien ex, fringilla eget nulla sit amet, facilisis vehicula erat. Nam accumsan massa non turpis pharetra, nec viverra dolor rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis interdum dolor in ultrices congue. Vivamus non nibh consectetur, accumsan sapien id, lacinia orci. Nulla facilisi.
        </Text>
        

        <TouchableOpacity
         //botao da  TAG 
            activeOpacity={0.7}
            style={Css.tagPost}>
                <Text style={Css.txtTag} >TAG</Text>
        </TouchableOpacity>

        <Like_comentar_salvar/>
        
        </View>
        </View>
    );
}
