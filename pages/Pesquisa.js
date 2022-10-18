import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import {Feather} from '@expo/vector-icons';
import { useState } from 'react';
import CustomButton from '../Componentes/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function Pesquisa (){

  const [pesquisa, setPesquisa] = useState('')

  const navigation = useNavigation()

  const onPressMatemtatica = () =>{
    navigation.navigate('ForumMatematica')
  }

  return (
   <View style={Css.container}>
   
    <View style={styles.cabecalho}>
      <Image source={Vector} style={Css.img} />
      <View style={styles.containerTextInput}>
        <Feather name='search' size={20} style={styles.inconTextInput}/>
        <TextInput 
        style={styles.textInput}
        placeholder={'Buscar...'}
        onChangeText={setPesquisa}>{pesquisa}</TextInput>
      </View>
    </View>
      <View style={styles.container}>
        <Text style={styles.text}>Fóruns</Text>
        <View style={styles.containerForuns}>
          <CustomButton
          onPress={onPressMatemtatica}
          text={'Matematica'}
          type={'QUARTENARY'}
          />
          <CustomButton
          text={'Português'}
          type={'QUARTENARY'}
          />
          <CustomButton
          text={'Literatura'}
          type={'QUARTENARY'}
          />
          <CustomButton
          text={'História'}
          type={'QUARTENARY'}
          />
          <CustomButton
          text={'Geografia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          text={'Filosofia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          text={'Sociologia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          text={'Química'}
          type={'QUARTENARY'}
          />
          <CustomButton
          text={'Física'}
          type={'QUARTENARY'}
          />
          <CustomButton
          text={'Biologia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          text={'Linguas Estrangeiras'}
          type={'QUARTENARY_SPECIAL'}
          />
        </View>
      </View>

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
  },
  container:{
    width: '90%',
    alignSelf: 'center'
  },
  containerForuns:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    left: 15,
    fontSize: 50,
    fontWeight: '700',
    color: '#FFFFFF',
    marginVertical: 25,
  },
})