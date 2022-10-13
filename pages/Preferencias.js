import React from "react";
import {View, Image, ScrollView, StyleSheet, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Css from "./css";
import Vector from '../img/Vector.png'
import SetaDireita from '../img/SetaDireita.png'
import Materia from "../Componentes/CustomMaterias";

export default function Preferencias(){

    const navigation = useNavigation();
    const onPressPreferencias = () => {
        navigation.navigate('Routes')
    }

    return(
        <View style={Css.container}>
   
            <View style={Css.cabecalho}>
                <Image source={Vector} style={Css.img} />
                <Pressable onPress={onPressPreferencias}>
                    <Image source={SetaDireita} style={styles.botaoContinuar}></Image>
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
                    <Materia/>
                    <Materia/>
                    <Materia/>
                    <Materia/>
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
    botaoContinuar: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-start',
        top: -8,
    }
})