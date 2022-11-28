import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable, Image} from 'react-native';
import Css from '../css'
import CustomButton from '../../Componentes/CustomButton';
import CustomInput from '../../Componentes/CustomInput';
import Voltar from '../../img/voltar.png'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


export default function Postagem (){

  const {control, handleSubmit} = useForm();

  const navigation = useNavigation()

  const onPressVoltar = () => {
    navigation.goBack()  
  }
  const onPressTagSelect = () =>{
    navigation.navigate('TagSelect')
  }

  return (
   <View style={Css.container}>
      <View style={[Css.cabecalho, styles.cabecalho]}>
        <CustomButton text={'Postar'} type="SECONDARY"/>
        <Pressable onPress={onPressVoltar} style={styles.botaoVoltar}>
          <Image source={Voltar} style={styles.imagemVoltar}></Image>
        </Pressable>
      </View>
      <ScrollView>
        <CustomInput
        name="Titulo"
        placeholder={'Título'}
        placeholderTextColor={'#808080'}
        textStyle='TITLE'
        autoCorrect={true}
        type='SECONDARY'
        control={control}
        />

        <CustomInput
        name="Texto"
        placeholder={'Digite... '}
        placeholderTextColor={'#808080'}
        textStyle='BODY'
        multiline={true}
        autoCorrect={true}
        type='SECONDARY'
        maxLength={2000}
        control={control}
        />
      </ScrollView>
      <Pressable onPress={onPressTagSelect} style={styles.botao}>
        <Text style={styles.textBotao}>Selecionar TAG</Text>
      </Pressable>
      <View style={styles.anexos}>
        <Feather name='paperclip' size={35} color={'#FFF'} style={styles.clip}/>
        <Feather name='camera' size={35} color={'#FFF'} style={styles.camera}/>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    marginBottom: 15,
  },
  anexos: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignSelf:'flex-end',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0A5363'
  },
  clip: {
    marginLeft: 50,
  },
  camera: {
    marginLeft: 25,
  },
  botao: {
    height: 36,
    width: 180,
    backgroundColor: '#25252B',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 57,
    marginVertical: 20,
    marginLeft: 20
  },
  textBotao:{
    color: '#8C8C8F',
    fontSize: 18,
    fontWeight: '600',
  },
  imagemVoltar: {
    alignSelf: 'flex-start',
  },
  botaoVoltar: {
    alignSelf: 'flex-start',
    top: -23,
  },
})