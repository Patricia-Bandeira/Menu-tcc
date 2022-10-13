import react from "react";
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Like_comentar_salvar from "./interacoesPosts"
import Css from "../pages/css";
import UserBase from '../img/userBase.png';
import tresPontos from '../img/3pontos.png';


export default function PostUm () {
    return(
    
        <TouchableOpacity
        //informação do user
            activeOpacity={0.7} style={Css.post1}>
        <Image source={UserBase} style={Css.perfil} />
        <Text style={Css.nomeSobrenome}>Nome Sobrenome</Text>
        <Text style={Css.data}>10/10/2022</Text>

        <TouchableOpacity 
        // botao tres pontos
            activeOpacity={0.7}
            style={Css.botao}> 
            <Image source={tresPontos} style={Css.TresPontosIcon} />
        </TouchableOpacity>

        {/* corpo do post */}
        <Text style={Css.user1}>@fulaninho</Text>
        <Text style={Css.forum}>#Fórum</Text>
        <Text style={Css.titulo}>Titulo</Text>
        <Text style={Css.txt}>Olá isto é um exemplo apenas de como, supostamente, ficariam os posts na timeline principal. ‘Cause sometimes, I look in her eyes and that’s where I find a glimpse of us. And I try to fall for her touch, but I’m thinking of the way it was.</Text>
        <Text style={Css.txt_VerMais}>Ver Mais</Text>
        <TouchableOpacity
        //botao da  TAG
            activeOpacity={0.7}
            style={Css.tag}>
        </TouchableOpacity>
        
        <Like_comentar_salvar/>
    
        </TouchableOpacity>
    );
}