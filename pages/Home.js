import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
export default function Home (){
  return (
   <View style={Css.container}>

    <View style={Css.cabecalho}>
    <Text style={Css.teste}>aaaaaaaammaaaaa</Text>
   <Image source={Vector} style={Css.img} />
    </View>


      <View style={styles.post2}>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  post2:{
    color: 'pink'
  }
});

