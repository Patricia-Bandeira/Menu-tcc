import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from '../css'
import PostUm from '../../Componentes/Feed/postFeedExemplo1'
import voltar from '../../img/iconVoltar.png'
import { useNavigation } from '@react-navigation/native';

export default function Salvos (){


  const onPressVoltarPerfil = () =>{
    navigation.navigate('Routes')
  }
  const navigation = useNavigation();

  return (

   <View style={Css.container} >

    <View style={Css.cabecalho}>
      <Text style={styles.salvos}>Salvos</Text>
    <TouchableOpacity
          onPress={onPressVoltarPerfil}
          activeOpacity={0.3}
          style={styles.btnIconV}>
          <Image source={voltar} style={styles.icon} />
     </TouchableOpacity>

     {/* postagens salvas */}
    </View>
     <PostUm/>
     </View>
     
  );
}

const styles = StyleSheet.create({ 
  salvos:{
    width:80,
    height:30,
    top:20,
    alignSelf: 'center',
    color: '#D6D6D6',
    fontSize:25
  },
  btnIconV:{
    alignSelf: 'flex-start',
    top: -8, 
  },
  icon:{
    width: 27,
    height: 27,
  }
})