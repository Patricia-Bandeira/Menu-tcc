import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import {Feather} from '@expo/vector-icons';

export default function Pesquisa (){
  return (
   <View style={Css.container}>
   
    <View style={styles.cabecalho}>
      <Image source={Vector} style={Css.img} />
      <View style={styles.containerTextInput}>
        <Feather name='search' size={20} style={styles.inconTextInput}/>
        <TextInput style={styles.textInput}>Buscar...</TextInput>
      </View>
    </View>
      <Text>Fóruns</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho:{
    backgroundColor: '#25252A',
    alignSelf:'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  containerTextInput: {
    marginBottom: 10,
    flexDirection: 'row',
    marginVertical: 50,
    backgroundColor: '#D6D6D6',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 57,
    width: '80%',
  },
  textInput: {
    flex: 1,
  },
  inconTextInput: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 5,
  }
})