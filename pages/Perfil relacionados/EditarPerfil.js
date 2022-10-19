import React, { useState } from 'react'
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import Css from '../css'
import Vector from '../../img/Vector.png'
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


export default function EditarPerfil (){

    const onPressVoltarPerfil = () =>{
      navigation.navigate('Routes')
    }
    const navigation = useNavigation();

//  const [nome, SetNome]  = useState(''); 
  return ( 
   <View style={Css.container}> 

    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />  
              
    </View>

    
                                            
    <View style={styles.ViewEditarFoto}>
      <TouchableOpacity style={styles.btnEditarFoto}> 
       <Feather name="plus" size={140} color={'#D3D3D3'}/> 
      </TouchableOpacity>
     </View>

    <View>
    <TextInput style={styles.textInput} 
      placeholder='Digite seu Nome...' placeholderTextColor={'#d6d6d6'}
      //  onChangeText={nome => SetNome(nome)} value={nome}
       />
    </View>

     <TouchableOpacity onPress={onPressVoltarPerfil} style={styles.btnSalvar}> 
      <Feather name="check" size={70} color={'#808080'}/> 
     </TouchableOpacity>
       
    </View>
  );
}

const styles = StyleSheet.create({ 
  textInput:{
    height: 40,
    width: '83%',
    borderColor: "#d6d6d6",
    borderBottomWidth: 1,
    marginTop:130,
    alignSelf:'center',
    color: '#d6d6d6'
  },
  ViewEditarFoto:{
    flex:0.7,
    backgroundColor:'black',
    marginLeft:0,
    marginRight:0,
    marginTop:45
  },
  btnEditarFoto:{
    backgroundColor:'#ffffff',
    width:140,
    height:140,
    marginTop:0,
    borderRadius:100,
    alignSelf:'center'
  },
  btnSalvar:{
    backgroundColor:'#ffffff',
    marginTop:380,
    height:70,
    width:70,
    right:-280,
    borderRadius:100
  }
})