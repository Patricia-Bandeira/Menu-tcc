import react from "react";
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Like_comentar_salvar from "./Feed/interacoesPosts"
import Css from "../pages/css";
import UserBase from '../img/userBase.png';
import tresPontos from '../img/iconTresPontos.png';
import foto from '../img/fotoExemplo.png'


export default function PostDois () {
    return (
        <View style={Css.postCard}>
        <TouchableOpacity
            //informação do user
            activeOpacity={0.7}>
           
            <Image source={UserBase} style={Css.fotoPerfilPost} />
            <Text style={Css.nomeDeUsuarioPost} >Nome Sobrenome</Text>
            <Text style={Css.userArrobaPost} >@fulaninha</Text>
            <Text style={Css.dataPostCorpo} >11/10/2022</Text>
            <TouchableOpacity
            //botao tres pontos
                activeOpacity={0.7}>
                <Image source={tresPontos} style={Css.IconTresPontos}/>
            </TouchableOpacity>

            {/* corpo post */}
            <Text style={Css.forumPostCorpo}>#Fórum</Text>
            <Text style={Css.tituloPostCorpo}>Titulo</Text>
            <Image source={foto} style={Css.fotoExemploPost} />

            <TouchableOpacity
            //botao da  TAG
            activeOpacity={0.7}
            style={Css.tagPost}>
                <Text style={Css.txtTag} >TAG</Text>
            </TouchableOpacity>

            <Like_comentar_salvar/>

        </TouchableOpacity>
        </View>
     
    )
}