import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import CustomInput from '../Componentes/CustomInput';
import Css from './css';
import Vector from '../img/Vector.png'
import CustomButton from '../Componentes/CustomButton';
import background_login_signup from '../img/background_login_signup.png'



export default function Cadastro(){

    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
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
                placeholder="Nome" 
                value={nome} 
                setValue={setNome}
                />
                <CustomInput 
                placeholder="Nome de Usuário" 
                value={usuario} 
                setValue={setUsuario}
                />
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
                text={'cadastre-se'} 
                onPress={onPressSigngUp}
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
