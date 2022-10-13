import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from '../pages/css'
import Like_comentar_salvar from './interacoesPosts';
import Vector from '../img/Vector.png';
import UserBase from '../img/userBase.png';
import pontos from '../img/3pontos.png';
import Curtir from '../img/Curtir.png';
import voltar from '../img/voltar.png'
 

export default function PostEmDestaque () {
    return (
        <View style={Css.post1}>
     <Image source={UserBase} style={Css.perfil} />
     <Text style={Css.nomeSobrenome}>Nome Sobrenome</Text>
     <Text style={Css.data}>11/10/2022</Text>
        {/* user info */}

     <TouchableOpacity
     //botao tres pontos
          activeOpacity={0.7}
          style={Css.botao}>
          <Image source={pontos} style={Css.TresPontosIcon} />
     </TouchableOpacity>

        {/* corpo do post */}
     <Text style={Css.user1}>@cicrano</Text>
     <Text style={Css.forum}>#Fórum</Text>
     <Text style={Css.titulo}>Titulo</Text>
     <Text style={Css.txt}>Olá isto é um exemplo apenas de como, supostamente, ficariam os posts na timeline principal. ‘Cause sometimes, I look in her eyes and that’s where I find a glimpse of us. And I try to fall for her touch, but I’m thinking of the way it was.</Text>
    

     <TouchableOpacity
        //boatao TAG
          activeOpacity={0.7}
          style={Css.tag}>
     </TouchableOpacity>
     
    <Like_comentar_salvar/>
    {/* interacoes Posts com o post */}
     </View>
    );
}