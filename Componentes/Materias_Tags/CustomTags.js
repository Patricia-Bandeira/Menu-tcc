import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Tags({ onPress, text, type = "PRIMARY" }){

    return(
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 2, 
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 57,
        alignItems: 'center',
        justifyContent: 'center',

        

    },
    container_PRIMARY:{
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 2,
    },
    container_SECONDARY:{
        backgroundColor: '#000',
        borderColor: '#fff',
        borderWidth: 2,
    },

    text: {
        fontWeight: '600',
        fontSize: 8
    },
    text_PRIMARY: {
        color: '#000',
    },
    text_SECONDARY: {
        color: '#fff',
    },


})