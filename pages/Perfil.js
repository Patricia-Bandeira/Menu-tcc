import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png';
import voltar from '../img/voltar.png'

export default function Perfil (){
  return (
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />
    <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIconV}>
          <Image source={voltar} style={Css.icon} />
     </TouchableOpacity>
    </View>
    
    <View style={Css.coment}>
      
    <Text style={Css.nomeSobrenomeCC}>Nome Sobrenome</Text>
    <Text style={Css.userCC}>@fulaninho</Text>
    <Text style={Css.tituloCC}>Titulo</Text>
     <Text style={Css.txtCC}>Olá isto é um exemplo apenas de como, supostamente, ficariam os posts na timeline principal. ‘Cause sometimes, I look in her eyes and that’s where I find a glimpse of us. And I try to fall for her touch, but I’m thinking of the way it was.</Text>
    </View>
    <TextInput placeholder="Digite seu comentário..." style={Css.textInput} />
    </View>
  );
}