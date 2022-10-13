import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Tags(){

    return(
        <View style={styles.container}>
        <Pressable>
            <Text style={styles.text}>Tag</Text>
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 57,
        alignItems: 'center',

    },
    text: {
        color: '#000',
        fontWeight: '600',
    },


})