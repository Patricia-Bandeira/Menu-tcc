import {Text, View, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
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
  const onPressPortugues = () =>{
    navigation.navigate('ForumPortugues')
  }
  const onPressLiteratura = () =>{
    navigation.navigate('ForumLiteratura')
  }
  const onPressHistoria = () =>{
    navigation.navigate('ForumHistoria')
  }
  const onPressGeografia = () =>{
    navigation.navigate('ForumGeografia')
  }
  const onPressFilosofia = () =>{
    navigation.navigate('ForumFilosofia')
  }
  const onPressSociologia = () =>{
    navigation.navigate('ForumSociologia')
  }
  const onPressQuimica = () =>{
    navigation.navigate('ForumQuimica')
  }
  const onPressFisica = () =>{
    navigation.navigate('ForumFisica')
  }
  const onPressBiologia = () =>{
    navigation.navigate('ForumBiologia')
  }
  const onPressLinguas_Estrangeiras = () =>{
    navigation.navigate('ForumLinguas_Estrangeiras')
  }
  

  return (
   <View style={Css.container}>
   
    <View style={styles.pesquisaCabecalho}>
      <Image source={Vector} style={Css.img} />
      <View style={styles.containerTextInput}>
        <Feather name='search' size={20} style={styles.inconTextInput}/>
        <TextInput 
        style={styles.textInput}
        placeholder={'Buscar...'}
        onChangeText={setPesquisa}>{pesquisa}</TextInput>
      </View>
    </View>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Fóruns</Text>
        <View style={styles.containerForuns}>
          <CustomButton
          onPress={onPressMatemtatica}
          text={'Matematica'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressPortugues}
          text={'Português'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressLiteratura}
          text={'Literatura'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressHistoria}
          text={'História'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressGeografia}
          text={'Geografia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressFilosofia}
          text={'Filosofia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressSociologia}
          text={'Sociologia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressQuimica}
          text={'Química'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressFisica}
          text={'Física'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressBiologia}
          text={'Biologia'}
          type={'QUARTENARY'}
          />
          <CustomButton
          onPress={onPressLinguas_Estrangeiras}
          text={'Linguas Estrangeiras'}
          type={'QUARTENARY_SPECIAL'}
          />
        </View>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pesquisaCabecalho:{
    backgroundColor: '#0A5363',
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