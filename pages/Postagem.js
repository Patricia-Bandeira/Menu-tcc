import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Css from './css'
import CustomButton from '../Componentes/CustomButton';
import CustomInput from '../Componentes/CustomInput';

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
   </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#FFF',
    alignSelf: 'center'
  },
  container: {
    alignSelf: 'center',
    marginVertical: 10,
    width: '90%'
  },
  cabecalho: {
    marginBottom: 15,
  },

})