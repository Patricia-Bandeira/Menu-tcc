import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
export default function Home (){
  return (
   <View style={Css.container}>
    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />
    </View>
    <ScrollView> 
      <View style={Css.post1}>


      </View>
    </ScrollView>

    </View>
  );
}

