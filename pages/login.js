import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from 'react-native';
import CustomInput from '../Componentes/CustomInput';
import Css from './css';
import Vector from '../img/Vector.png'
import CustomButton from '../Componentes/CustomButton';


export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    return(
        <View style={Css.container}>
            <View style={Css.cabecalho}>
                <Image source={Vector} style={Css.img} />
            </View>
            <View>
                <Text style={styles.root}>
                Olá teste, essa é a tela de login
                </Text>

                <CustomInput 
                placeholder="Email" 
                value={email} 
                setValue={setEmail}
                />
                <CustomInput 
                placeholder="Senha" 
                value={senha} 
                setValue={setSenha} 
                secureTextEntry={true}
                />
                <CustomButton/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({  
    root: {
      alignItems: 'center',
      alignSelf: 'center',
      color: 'white',
      padding: 100,

     },
       
  });
