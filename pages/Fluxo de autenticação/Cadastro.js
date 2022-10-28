import React, { useDebugValue, useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';
import CustomInput from '../../Componentes/CustomInput.js';
import Css from '../css';
import Vector from '../../img/Vector.png'
import CustomButton from '../../Componentes/CustomButton';
import background_login_signup from '../../img/background_login_signup.png'
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'
import {Teste} from '../../function.js';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Cadastro(){

    const [teste, setTeste] = useState('')
    
    const Armazenar = (chave,valor) => {
        AsyncStorage.setItem(chave,valor)
    }
    
    const Buscar = async (chave) => {
        const valor = await AsyncStorage.getItem(chave)
        setTeste(valor)
    }
    
    Armazenar('01', 'teste')
    Armazenar('02', 'oi isso aqui é o id numero 2')
    // Buscar('02')
    
    const {control, handleSubmit, formState: {errors}} = useForm();

    console.log(errors);

    const navigation = useNavigation();
    const onPressLogin = () => {
        
        navigation.navigate('Login')
    }
    const onPressSigngUp = async data => {

        // Teste({
        //     nome: data.Nome,
        //     usuario: data.Usuario, 
        //     email: data.Email,
        //     senha: data.Senha, 
        // })

         try{            
            await fetch('https://backend-sestante.herokuapp.com/user', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: data.Nome, 
                        username: data.Usuario, 
                        email: data.Email,
                        password: data.Senha, 
                    })
                })
                .then(response => response.json())
                .then((responseJson) => {
                    const resposta = (JSON.stringify(responseJson))
                    console.log(resposta)
                    // Armazenar('01', resposta)
                })
                
                // .then(navigation.navigate('Preferencias'))
            }
            catch(error){
                console.log(error)
            }

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
                rules={{required: 'Insira um Nome'}} 
                />
                <CustomInput
                name="Usuario"
                placeholder="Nome de Usuário" 
                control={control}
                rules={{required: 'Insira um Nome de Usuário'}} 
                />
                <CustomInput 
                name="Email"
                placeholder="Email" 
                control={control}
                rules={{required: 'Insira um Email', pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido"} }} 
                />
                <CustomInput 
                name="Senha"
                placeholder="Senha" 
                secureTextEntry={true}
                control={control}
                rules={{required: 'Insira uma Senha', minLength: {value: 3, message: 'Senha é curta de mais'}}} 
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
                {/* {Buscar('01')} */}
                <Text>{teste}</Text>
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
