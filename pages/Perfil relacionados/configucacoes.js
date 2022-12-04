import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Css from '../css';
import Checkbox from 'expo-checkbox';
import Vector from '../../img/Vector.png';
import voltar from '../../img/voltar.png';
import { useNavigation } from '@react-navigation/native';


export default function Configuracoes (){
  const onPressVoltarPerfil = () =>{
    navigation.navigate('Routes')
  }
  const onPressTermos = () =>{
    navigation.navigate('ConfigTermos')
  }
  const onPresslogout = () =>{
    navigation.navigate('Login')
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
          style={styles.btnIconVoltar}>
          <Image source={voltar} style={styles.icon} />
     </TouchableOpacity>
    </View>

      <View style={styles.ViewConfig}>
        <Text style={styles.textCheck}>Desativar Notificações</Text>
        <Checkbox style={styles.Checkbox} value={isChecked} onValueChange={setChecked}/>
      </View>

      <View style={styles.ViewConfig}>
       <TouchableOpacity onPress={onPresslogout} style={styles.btnConfig}>
        <Text style={styles.ConfigText}>Fazer Logout</Text>
       </TouchableOpacity>
      </View>

      <View style={styles.ViewConfig}>
       <TouchableOpacity onPress={onPressTermos} style={styles.btnConfig}>
        <Text style={styles.ConfigText}>Termos de uso</Text>
       </TouchableOpacity>
      </View>

      <View style={styles.ViewConfig}>
       <TouchableOpacity style={styles.btnConfig}>
        <Text style={styles.ConfigTextRed}>Desativar Conta</Text>
       </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  btnIconVoltar:{
    alignSelf: 'flex-start',
    top: -10, 
  },
  icon:{
    width: 27,
    height: 27,
  },
  ViewConfig:{
    flex:0.12,
    backgroundColor:'#000',
    borderWidth:0.5,
    borderBottomColor:'#d6d6d6',
    marginTop:3
  },
  textCheck:{
  color:'#d6d6d6',
  textAlign:'left',
  fontSize:18,
  marginTop:30,
  marginLeft:25,
  fontWeight:'semi bold'
  },
  Checkbox:{
    marginLeft:310,
    marginTop:-30,
    backgroundColor:'#000',
    height:40,
    width:40,
    
  },
  btnConfig:{
    backgroundColor:'black',
    height:50,
    marginTop:25
  },
  ConfigText:{
    color:'#d6d6d6',
    textAlign:'left',
    fontSize:18,
    marginTop:6,
    marginLeft:25,
    fontWeight:'semi bold'
  },
  ConfigTextRed:{
    color:'#DD2E2E',
    textAlign:'left',
    fontSize:18,
    marginTop:6,
    marginLeft:25,
  }
})