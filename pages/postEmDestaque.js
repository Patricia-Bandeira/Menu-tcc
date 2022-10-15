import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from './css'
import ComentarioPostDestaque from '../Componentes/Feed/comentarioExemplo.js';
import PostEmDestaque from '../Componentes/Feed/postDestaqueExemplo.js';
import Vector from '../img/Vector.png';
import voltar from '../img/voltar.png';
import { useNavigation } from '@react-navigation/native';

export default function PostEmDDestaque (){
  const onPressVoltarHome = () =>{
    navigation.navigate('Routes')
}
const navigation = useNavigation();
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
     {/* cabeçalho */}
   

    <ScrollView>

    <PostEmDestaque/>
     {/* Post em post em destaque */}

    <ComentarioPostDestaque/>
    <ComentarioPostDestaque/>
    <ComentarioPostDestaque/>
 
    </ScrollView>
    
    
    </View>
  );
}