import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
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

    </View>

    </View>
  );
}