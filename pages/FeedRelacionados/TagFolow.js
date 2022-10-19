import React from "react";
import {View, Image, ScrollView, StyleSheet, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Css from '../css'
import Vector from '../../img/Vector.png';
import Voltar from '../../img/voltar.png'
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

export default function TagFolow(){

    const navigation = useNavigation();
    const onPressVoltar = () => {
        navigation.navigate('Routes')
    }

    return(
        <View style={Css.container}>
   
            <View style={Css.cabecalho}>
                <Image source={Vector} style={Css.img} />
                <Pressable onPress={onPressVoltar} style={styles.botaoVoltar}>
                    <Image source={Voltar} style={styles.imagemVoltar}></Image>
                </Pressable>
            </View>
            
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.titulo}>
                        Siga mais Tags!
                    </Text>
                    <Matematica/>
                    <Portugues/>
                    <Literatura/>
                    <Geografia/>
                    <Historia/>
                    <Quimica/>
                    <Biologia/>
                    <Fisica/>
                    <Filosofia/>
                    <Sociologia/>
                    <Linguas_Estrangeiras/>

                </ScrollView>
            </View>
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
    imagemVoltar: {
        alignSelf: 'flex-start',
    },
    botaoVoltar: {
        alignSelf: 'flex-start',
        top: -8,
    },
})