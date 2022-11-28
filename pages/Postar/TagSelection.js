import React, { useState, useEffect } from "react";
import {View, Image, ScrollView, StyleSheet, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Css from '../css'
import Vector from '../../img/Vector.png';
import SetaDireita from '../../img/SetaDireita.png'
import Loading from "../../Componentes/loading";
import AS_API from '@react-native-async-storage/async-storage'
import Matematica from "../../Componentes/Materias_Tags/Matematica";
import Portugues from "../../Componentes/Materias_Tags/Portugues";
import Literatura from "../../Componentes/Materias_Tags/Literatura";
import Geografia from "../../Componentes/Materias_Tags/Geografia";
import Historia from "../../Componentes/Materias_Tags/Historia";
import Quimica from "../../Componentes/Materias_Tags/Quimica";
import Biologia from "../../Componentes/Materias_Tags/Biologia";
import Fisica from "../../Componentes/Materias_Tags/Fisica";
import Filosofia from "../../Componentes/Materias_Tags/Filosofia";
import Sociologia from "../../Componentes/Materias_Tags/Sociologia";
import Linguas_Estrangeiras from "../../Componentes/Materias_Tags/Linguas_Estrangeiras";

export default function TagSelection(){

    const [responsePending, setResponsePending] = useState(false)

    const [screen, setScreen] = useState([])

    const [keyTagPressed, setKeyTagPressed] = useState()

    const navigation = useNavigation();
    const onPressPreferencias = () => {
        navigation.navigate('Routes')
    }

    const getScreen = async () => {
        setResponsePending(true)
        try{           
            await fetch('https://sextans.loca.lt/forum/list', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'},          
                })
                .then(response => response.json())
                .then(async responseJson => {
                    const resposta = (JSON.stringify(responseJson))
                    console.log([Array.isArray(responseJson) ? responseJson : 'não é um array'])
                    setScreen(responseJson)
                })
            }
            catch(error){
                console.log(error)
            }
        setResponsePending(false)
    };

    const onPressTags = (key, name) => {
        const tagId = key
        const nome = name
        setKeyTagPressed(tagId)
        console.log(nome)
        AS_API.setItem('TagPostagem', tagId.toString())
        AS_API.setItem('TagPostagemNome', nome.toString())
    }

    useEffect(() =>{
        getScreen()
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
                        Escolha a Tag
                    </Text>
                    {screen.map(screen => {
                        return(
                            <View key={screen.id} style={styles.materia_container}>
                                <Text key={screen.id} style={styles.materia_text}>
                                    {screen.name}
                                </Text>
                                <View style={styles.innerContainer}>
                                    {screen['tags'].map((tags) => [
                                        <Pressable key={tags.id} onPress={() => onPressTags(tags.id , tags.name)} style={[styles.tags_container, keyTagPressed === tags.id ? styles.tags_container_SECONDARY : styles.tags_container_PRIMARY]}>
                                            <Text key={tags.id} style={[styles.tags_text, keyTagPressed === tags.id ? styles.tags_text_SECONDARY : styles.tags_text_PRIMARY]}>
                                            {tags.name}
                                            </Text>
                                        </Pressable>
                                    ])} 
                                </View>
                            </View>
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
        alignSelf: 'center',
        fontSize: 50,
        fontWeight: '600',
        color: '#D6D6D6', 
        marginVertical: '7%'
    },
    subtitulo: {
        fontSize: 25,
        fontWeight: '600',
        color: '#D6D6D6',
        marginBottom: 30, 
    },
    imagemContinuar: {
        alignSelf: 'flex-end',
        // top: -8,
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