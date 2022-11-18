import React, { useEffect, Component } from "react";
import { useState } from "react";
import {View, Image, ScrollView, StyleSheet, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AS_API from '@react-native-async-storage/async-storage'
import Loading from '../../Componentes/loading.js';
import Css from "../css";
import Vector from '../../img/Vector.png';
import SetaDireita from '../../img/SetaDireita.png'


export default function Preferencias(){

    const navigation = useNavigation();
    const onPressPreferencias = async () => {
        
        setResponsePending(true)
        
        const receivedUserId = await AS_API.getItem('userId')
        const userId = parseInt(receivedUserId, 10)
        const receivedUserPassword = await AS_API.getItem('userPassword')
        const userPassword = receivedUserPassword.toString()
        console.log(userPassword)
        console.log(userId)

        try{
            await fetch('https://backend-sestante.herokuapp.com/user/preference', {
                    method: 'POST',
                    headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                        id: userId,
                        password: userPassword, 
                        preference_ids: keyTagPressed, 
                    })
                })
                .then(response => response.json())
                .then(async responseJson => {
                    const resposta = (JSON.stringify(responseJson))
                    console.log(responseJson)
                    if (resposta.includes('token')){
                        navigation.navigate('Routes')
                        navigation.reset({
                            index: 0,
                            routes: [{
                                 name: 'Routes',
                                 params: { someParam: 'Param1' }
                            }]
                        })
                        AS_API.setItem('token', (JSON.stringify(responseJson.token)))
                        AS_API.setItem('userPreferences', keyTagPressed)
                        console.log(JSON.stringify(responseJson.token))
                    }
                    else if(resposta.includes('minLength')){
                        alert('Por favor, selecione uma Tag')
                    }
                    else {
                        alert('Erro inesperado')
                    }
                })
        }
        catch(error){
            console.log(error)
        }
        setResponsePending(false)
    }

    const [preferencesScreen, setPreferencesScreen] = useState([])

    const [responsePending, setResponsePending] = useState(false)
    
    const [keyTagPressed, setKeyTagPressed] = useState([])

    const onPressTags = (key) => {
        const tagId = key
        // console.log(key)
        setKeyTagPressed(prevArray => {
            if(prevArray.includes(tagId)){
                const index = prevArray.indexOf(tagId)
                const teste = prevArray.splice(index, index + 1)
                teste
                console.log('Tag de número: ' + teste + ' retirada')
                return prevArray
            }
            else{
                return [...prevArray, tagId]
            }
        })

    }

    const getPreferences = async () => {
        setResponsePending(true)
        try{           
            await fetch('https://backend-sestante.herokuapp.com/forum/list', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'},          
                })
                .then(response => response.json())
                .then(async responseJson => {
                    const resposta = (JSON.stringify(responseJson))
                    console.log([Array.isArray(responseJson) ? responseJson : 'não é um array'])
                    setPreferencesScreen(responseJson)
                })
            }
            catch(error){
                console.log(error)
            }
        setResponsePending(false)
    };

    useEffect(() =>{
        getPreferences()
    }, [])

    return(
        <View style={Css.container}>
   
            <View style={Css.cabecalho}>
                <Image source={Vector} style={Css.img} />
                <Pressable onPress={onPressPreferencias} style={styles.botaoContinuar}>
                    <Image source={SetaDireita} style={styles.imagemContinuar}></Image>
                </Pressable>
            </View>
            
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.titulo}>
                        Antes de {"\n"}Começarmos... 
                    </Text>
                    <Text style={styles.subtitulo}>
                        temos que escolher suas {"\n"}matérias favoritas!
                    </Text>
                    {preferencesScreen.map(preference => {
                        return(
                            <View key={preference.id} style={styles.materia_container}>
                                <Text key={preference.id} style={styles.materia_text}>
                                    {preference.name}
                                </Text>
                                <View style={styles.innerContainer}>
                                    {preference['tags'].map((tags) => [
                                        <Pressable key={tags.id} onPress={() => onPressTags(tags.id)} style={[styles.tags_container, keyTagPressed.includes(tags.id) ? styles.tags_container_SECONDARY : styles.tags_container_PRIMARY]}>
                                            <Text key={tags.id} style={[styles.tags_text, keyTagPressed.includes(tags.id) ? styles.tags_text_SECONDARY : styles.tags_text_PRIMARY]}>
                                            {tags.name}
                                            </Text>
                                        </Pressable>
                                    ])} 
                                </View>
                            </View>
                            // keyTagPressed.indexOf(tags.id) >= 0
                            // keyTagPressed.includes(tags.id)
                            // keyTagPressed === tags.id
                        )
                    })}

                </ScrollView>
            </View>
            {responsePending ? <Loading/> : null}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        JustifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%',
    },
    titulo: {
        fontSize: 50,
        fontWeight: '600',
        color: '#D6D6D6', 
        marginVertical: 15
    },
    subtitulo: {
        fontSize: 25,
        fontWeight: '600',
        color: '#D6D6D6',
        marginBottom: 30, 
    },
    imagemContinuar: {
        alignSelf: 'flex-end',
    },
    botaoContinuar: {
        alignSelf: 'flex-end',
        top: -8,
    },
    materia_container: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginBottom: 15,
    },
    materia_text: {
        marginLeft: 3,
        fontSize: 20,
        fontWeight: '600',
    },
    innerContainer: {
        backgroundColor: '#000',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        borderColor: '#000',
        borderWidth: 5
    },
    tags_text: {
        fontWeight: '600',
        fontSize: 10
    },
    tags_text_PRIMARY: {
        color: '#000',
    },
    tags_text_SECONDARY: {
        color: '#fff',
    },
    tags_container: {
        paddingHorizontal: 10,
        paddingVertical: 2, 
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 57,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tags_container_PRIMARY: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 2,
    },
    tags_container_SECONDARY: {
        backgroundColor: '#000',
        borderColor: '#fff',
        borderWidth: 2,
    },
})