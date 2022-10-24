import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Css from '../css';
import Checkbox from 'expo-checkbox';
import Vector from '../../img/Vector.png';
import voltar from '../../img/voltar.png';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Configuracoes (){
  const [darkMode, setDarkMode] = useState(false);

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
      backgroundColor: darkMode ? '#000' : 'white',
      borderWidth:1,
      borderBottomColor: darkMode ? '#d6d6d6' : 'black',
    },
    textCheck:{
    color: darkMode ? '#d6d6d6' : 'black',
    textAlign:'left',
    fontSize:18,
    marginTop:30,
    marginLeft:25,
    fontWeight:'semi bold'
    },
    Checkbox:{
      marginLeft:310,
      marginTop:-40,
      backgroundColor: darkMode ? '#25252A' : '#C6C6C6',
      height:40,
      width:40,
      
    },
    Mode:{
width:40,
height:40,
backgroundColor: darkMode ? '#25252A' : '#C6C6C6',
marginLeft:310,
marginTop:-40,

    },
    btnConfig:{
      backgroundColor: darkMode ? '#000' : 'white',
      height:50,
      marginTop:25
    },
    ConfigText:{
      color: darkMode ? '#d6d6d6' : 'black',
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
      marginTop:30,
      marginLeft:25,
      fontWeight:'semi bold'
    },
    
    container: {
      flex: 1,
      backgroundColor:  darkMode ? '#000' : 'white',
      },
  })


  const onPressVoltarPerfil = () =>{
    navigation.navigate('Routes')
  }
  const navigation = useNavigation();
  
  const [isChecked, setChecked] = useState(false); /*Variável que deixa o checkbox da opção de desativar as notificações em estado false, ou seja, deixa o checkbox como desmarcado*/
  
  return (
   <View style={styles.container}>
   
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
        <Text style={styles.textCheck}>Alterar Modo</Text>
        
         <TouchableOpacity style={styles.Mode}>
         <MaterialCommunityIcons name="theme-light-dark" size={38} color={darkMode ? "#C6C6C6" : "#25252A"} 
         onPress={()=> darkMode ? setDarkMode(false) : setDarkMode(true)}
         />
         </TouchableOpacity>

      </View>

      <View style={styles.ViewConfig}>
       <TouchableOpacity >
        <Text style={styles.textCheck}>Fazer Logout</Text>
       </TouchableOpacity>
      </View>

      <View style={styles.ViewConfig}>
       <TouchableOpacity>
        <Text style={styles.ConfigTextRed}>Desativar Conta</Text>
       </TouchableOpacity>
      </View>
    </View>
  );
}
