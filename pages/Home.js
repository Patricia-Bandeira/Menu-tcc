import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
export default function Home (){
  return (
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
      <Text style={Css.teste}>aaaaaaaaaaaaa</Text>
    <Image source={Vector} style={Css.img} />
    </View>

    </View>
  );
}

