import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Pressable } from 'react-native';

export default function CustomButton(){
    <Pressable styles={styles.container}>
        <Text styles={styles.text}>CustomButton</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    container:{
    backgroundColor: '#fff',

    width: '100%',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    },
    text: {
    color: 'black',
    fontWeight: 'bold',
    },
})