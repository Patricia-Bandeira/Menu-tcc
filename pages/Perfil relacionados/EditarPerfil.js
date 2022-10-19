import React, { useState } from 'react'
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import Css from '../css'
import Vector from '../../img/Vector.png'
import { Feather } from '@expo/vector-icons'; 


export default function EditarPerfil (){
 const [nome, SetNome]  = useState(''); 
  return ( 
   <View style={Css.container}> 

    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />  
              
    </View>

    
                                            
    <View style={{flex:0.7, backgroundColor:'black', marginLeft:0, marginRight:0, marginTop:17}}>
      <TouchableOpacity style={{backgroundColor:'#ffffff', width:140, height:140, marginTop:0, borderRadius:100, alignSelf:'center'}}> 
       <Feather name="plus" size={140} color={'#D3D3D3'}/> 
      </TouchableOpacity>

     
      <TextInput style={Css.textInput} 

      placeholder='Nome Sobrenome...' placeholderTextColor={'white'} onChangeText={nome => SetNome(nome)} value={nome}/>
         
     </View>

     <TouchableOpacity style={{backgroundColor:'#ffffff', marginTop:380, height:70, width:70, right:-280, borderRadius:100}}> 
      <Feather name="check" size={70} color={'#808080'}/> 
     </TouchableOpacity>
       
    </View>
  );
}