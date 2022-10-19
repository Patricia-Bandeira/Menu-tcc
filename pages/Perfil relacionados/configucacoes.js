import React, { useState } from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Css from '../css';
import Checkbox from 'expo-checkbox';
import Vector from '../../img/Vector.png';
import voltar from '../../img/voltar.png';
import { useNavigation } from '@react-navigation/native';


export default function Configuracoes (){
  const onPressVoltarPerfil = () =>{
    navigation.navigate('Routes')
  }
  const navigation = useNavigation();
  
  const [isChecked, setChecked] = useState(false); /*Variável que deixa o checkbox da opção de desativar as notificações em estado false, ou seja, deixa o checkbox como desmarcado*/
  const [isCheckedTwo, setCheckedTwo] = useState(false) /*Variável que deixa o checkbox da opção de colocar o app em modo escuro em estado false*/
  
  return (
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />
    <TouchableOpacity
          onPress={onPressVoltarPerfil}
          activeOpacity={0.3}
          style={Css.btnIconV}>
          <Image source={voltar} style={Css.icon} />
     </TouchableOpacity>
    </View>

      <View style={{flex:0.17, backgroundColor:'black', borderWidth:1, borderColor:'#ffffff', marginTop:10}}>
        <Text style={{color:'white', textAlign:'left', fontSize:18, marginTop:26, marginLeft:10}}>Desativar Notificações</Text>
        <Checkbox style={{marginLeft:300, marginTop:-30 ,backgroundColor:'white', height:40, width:40, borderRadius:100}} value={isChecked} onValueChange={setChecked}/>
      </View>

      <View style={{flex:0.17, backgroundColor:'black', borderWidth:1, borderColor:'#ffffff', marginTop:5}}>
        <Text style={{color:'white', textAlign:'left', fontSize:18, marginTop:26, marginLeft:10}}>Modo Escuro</Text>
        <Checkbox style={{marginLeft:300, marginTop:-30 ,backgroundColor:'white', height:40, width:40, borderRadius:100}} value={isCheckedTwo} onValueChange={setCheckedTwo}/>
      </View>

      <View style={{flex:0.17, backgroundColor:'black', borderWidth:1, borderColor:'#ffffff', marginTop:5}}>
       <TouchableOpacity style={{backgroundColor:'black', height:50, marginTop:25}}>
        <Text style={{color:'white', textAlign:'left', fontSize:18, marginTop:0, marginLeft:10}}>Fazer Logout</Text>
       </TouchableOpacity>
      </View>

      <View style={{flex:0.17, backgroundColor:'black', borderWidth:1, borderColor:'#ffffff', marginTop:5}}>
       <TouchableOpacity style={{backgroundColor:'black', height:50, marginTop:25}}>
        <Text style={{color:'red', textAlign:'left', fontSize:18, marginTop:0, marginLeft:10}}>Desativar Conta</Text>
       </TouchableOpacity>
      </View>

    </View>
  );
}