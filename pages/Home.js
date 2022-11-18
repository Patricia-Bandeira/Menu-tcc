import {View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PostUm from '../Componentes/Feed/postFeedExemplo1';
import Css from './css'
import Vector from '../img/Vector.png'
import BotaoVerMais from '../img/iconMaisTags.png'
import PostDois from '../Componentes/Feed/postFeedExemplo2.js';

export default function Home (){

  const navigation = useNavigation()

  const onPressMaisTags = () => {
    navigation.navigate('TagFolow')
  }

  return (
   <View style={Css.container}>
   <Text style={Css.teste}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />
    <TouchableOpacity
          onPress={onPressMaisTags}
          activeOpacity={0.7}
          style={Css.botaoVerMaisTAG}>
          <Image source={BotaoVerMais} style={Css.IconMaisTags} />
     </TouchableOpacity>
    </View>

    <View>
      <ScrollView style={styles.row} >
      <PostUm/>
      <PostDois/>
      <PostUm/>
      <PostDois/>
      <PostDois/>
      <PostUm/>
      </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row:{
          marginBottom: 90,
  }
})