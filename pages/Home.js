import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png';
import userBase from '../img/userBase.png'

export default function Home (){
  return (
   <View style={Css.container}>

    <View style={Css.cabecalho}>
     <Image source={Vector} style={Css.img} />
    </View>


    <View style={Css.post1}>
     <Image source={userBase} style={Css.perfil} />
    </View>

    </View>
  );
}

