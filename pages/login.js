import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert, Pressable, ImageBackground } from 'react-native';
import CustomInput from '../Componentes/CustomInput';
import Css from './css';
import Vector from '../img/Vector.png'
import CustomButton from '../Componentes/CustomButton';
import background_login_signup from '../img/background_login_signup.png'



export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const onPressLogin = () => {
        console.warn("Apertou Login!")
    }
    const onPressSigngUp = () => {
        console.warn("Apertou Cadastro!")
    }
    
    return(
            
        <View style={Css.container}>
           <ImageBackground source={background_login_signup} resizeMode="cover" style={styles.Image}>
            <View style={Css.cabecalho}>
                <Image source={Vector} style={Css.img} />
            </View>
            <View style={styles.container}>
            

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
                <CustomButton 
                text={'entrar'} 
                onPress={onPressLogin}
                />
                <CustomButton 
                text={'cadastre-se'} 
                onPress={onPressSigngUp}
                type="TERTIARY"
                />
                
            </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: 'center',
     },
     Image: {
        flex: 1,
     }
});
