import React from "react";
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';
import Css from "./css";
import Vector from '../img/Vector.png'
import Materia from "../Componentes/CustomTag";

export default function Preferencias(){
    return(
        <View style={Css.container}>
   
            <View style={Css.cabecalho}>
            <Image source={Vector} style={Css.img} />
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
    }
})