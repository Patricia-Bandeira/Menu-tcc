import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from './css'
import ComentarioPostDestaque from '../Componentes/Feed/comentario.js';
import PostEmDestaque from '../Componentes/Feed/postDestaque.js'
import Vector from '../img/Vector.png';
import voltar from '../img/voltar.png'

export default function PostEmDDestaque (){
  return (
     
   <View style={Css.container}>

    <View style={Css.cabecalho}>
     <Image source={Vector} style={Css.img} />  
     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIconVoltar}>
          <Image source={voltar} style={Css.TresPontosIcon} />
     </TouchableOpacity>
    </View>
     {/* cabeçalho */}
   
    <PostEmDestaque/>
     {/* Post em post em destaque */}
    <ComentarioPostDestaque/>

    
    </View>
  );
}