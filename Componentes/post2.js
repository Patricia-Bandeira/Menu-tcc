import react from "react";
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Like_comentar_salvar from "./interacoesPosts"
import Css from "../pages/css";
import UserBase from '../img/userBase.png';
import tresPontos from '../img/3pontos.png';
import foto from '../img/foto.png'


export default function PostDois () {
    return (

        <TouchableOpacity
            //informação do user
            activeOpacity={0.7} style={Css.post2}>
            <Image source={UserBase} style={Css.perfil} />
            <Text style={Css.nomeSobrenome}>Nome Sobrenome</Text>
            <Text style={Css.data}>11/10/2022</Text>
            <Text style={Css.user}>@fulaninha</Text>
            
            <TouchableOpacity
            //botao tres pontos
                activeOpacity={0.7}
                style={Css.botao}>
                <Image source={tresPontos} style={Css.TresPontosIcon} />
            </TouchableOpacity>

            {/* corpo post */}
            <Text style={Css.forum}>#Fórum</Text>
            <Text style={Css.titulo}>Titulo</Text>
            <Image source={foto} style={Css.foto} />

            <TouchableOpacity
            //botao TAG
                activeOpacity={0.7}
                style={Css.tag}>
            </TouchableOpacity>

            <Like_comentar_salvar/>
        </TouchableOpacity>

     
    )
}