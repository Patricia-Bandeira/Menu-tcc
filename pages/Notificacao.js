import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import Container_notificacao from '../componentes/componente.notificacao';

export default function Notificacao (){
  return (
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />
    </View>
    <ScrollView>
      <Container_notificacao/>
    </ScrollView>
    </View>

  );
    

}