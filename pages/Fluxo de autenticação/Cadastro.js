import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import CustomInput from '../../Componentes/CustomInput.js';
import Css from '../css';
import Vector from '../../img/Vector.png'
import CustomButton from '../../Componentes/CustomButton';
import background_login_signup from '../../img/background_login_signup.png'
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'


export default function Cadastro(){

    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();
    const onPressLogin = () => {
        
        navigation.navigate('Login')
    }
    const onPressSigngUp = () => {
        
        navigation.navigate('Preferencias')
    }
    
    return(
            
        <View style={Css.container}>
           <ImageBackground source={background_login_signup} resizeMode="cover" style={styles.Image}>
            <View style={Css.cabecalho}>
                <Image source={Vector} style={Css.img} />
            </View>
            <View style={styles.container}>
            

                <CustomInput
                name="Nome" 
                placeholder="Nome"
                control={control}
                />
                <CustomInput
                name="Usuario"
                placeholder="Nome de Usuário" 
                control={control}
                />
                <CustomInput 
                name="Email"
                placeholder="Email" 
                control={control}
                />
                <CustomInput 
                name="Senha"
                placeholder="Senha" 
                secureTextEntry={true}
                control={control}
                />
                <CustomButton 
                text={'cadastre-se'} 
                onPress={handleSubmit(onPressSigngUp)}
                />
                <CustomButton 
                text={'Login'} 
                onPress={onPressLogin}
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
