import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, Alert } from 'react-native';
import CustomInput from '../../Componentes/CustomInput.js';
import Css from '../css';
import Vector from '../../img/Vector.png'
import CustomButton from '../../Componentes/CustomButton';
import background_login_signup from '../../img/background_login_signup.png'
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'


export default function Login(){

    const {control, handleSubmit, formState: {errors}} = useForm();

    console.log(errors)

    const navigation = useNavigation();
    const onPressLogin = data => {
        console.log(data)
        // validar usuario
        navigation.navigate('Routes')
        navigation.reset({
            index: 0,
            routes: [{
                 name: 'Routes',
                 params: { someParam: 'Param1' }
            }]
        })
    }
    const onPressSigngUp = () => {
        
        navigation.navigate('Cadastro')
    }
    
    return(
            
        <View style={Css.container}>
           <ImageBackground source={background_login_signup} resizeMode="cover" style={styles.Image}>
            <View style={Css.cabecalho}>
                <Image source={Vector} style={Css.img} />
            </View>
            <View style={styles.container}>
            

                <CustomInput
                name="Email"
                placeholder="Email"
                control={control}
                rules={{required: 'Insira seu Email', pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido"}}} 
                />
                <CustomInput
                name="Senha"
                placeholder="Senha" 
                secureTextEntry={true}
                control={control}
                rules={{required: 'Insira sua senha'}} 
                />
                <CustomButton 
                text={'entrar'} 
                onPress={handleSubmit(onPressLogin)}
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
