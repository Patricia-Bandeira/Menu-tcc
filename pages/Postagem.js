import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Pressable} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import CustomButton from '../Componentes/CustomButton';

export default function Postagem (){
  return (
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Postar</Text>
      </Pressable>
    </View>
      <Text style={styles.text}> Teste, isso é um texto </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#FFF',
    alignSelf: 'center'
  },
  button: {
    display: 'flex',
    width: 70,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 57,
    backgroundColor: '#D6D6D6',
    marginTop: 21,
  },
  buttonText: { 
    fontSize: 12,
    color: '#25252B',
    fontWeight: '500'
  }
})