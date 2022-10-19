import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from '../css'
import PostUm from '../../Componentes/Feed/postFeedExemplo1'
import voltar from '../../img/iconVoltar.png'

export default function Salvos (){
  return (
   <View style={Css.container} >

    <View style={Css.cabecalho}>
      <Text style={Css.salvos}>Salvos</Text>
    <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIconV}>
          <Image source={voltar} style={Css.icon} />
     </TouchableOpacity>
    </View>
     <PostUm/>
     </View>
     
  );
}