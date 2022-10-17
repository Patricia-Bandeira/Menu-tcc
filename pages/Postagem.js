import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Css from './css'
import CustomButton from '../Componentes/CustomButton';
import CustomInput from '../Componentes/CustomInput';
import { Feather } from '@expo/vector-icons';

export default function Postagem (){

  const [titulo,setTitulo] = useState('')
  const [corpo,setCorpo] = useState('')

  return (
   <View style={Css.container}>
      <View style={[Css.cabecalho, styles.cabecalho]}>
        <CustomButton text={'Postar'} type="SECONDARY"/>
      </View>
      <ScrollView>
        <CustomInput
        value={titulo}
        setValue={setTitulo}
        placeholder={'Título'}
        placeholderTextColor={'#808080'}
        textStyle='TITLE'
        type='SECONDARY'
        />

        <CustomInput
        value={corpo}
        setValue={setCorpo}
        placeholder={'Digite... '}
        placeholderTextColor={'#808080'}
        textStyle='BODY'
        multiline={true}
        type='SECONDARY'
        maxLength={2000}
        />
      </ScrollView>
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
    backgroundColor: '#25252B'
  },
  clip: {
    marginLeft: 50,
  },
  camera: {
    marginLeft: 25,
  },
})