import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import Routes from '../Routes';

export default function Home (){
  return (
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />
    </View>

    </View>
  );
}

