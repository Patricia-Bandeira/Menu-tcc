import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from 'react-native';


export default function CustomInput({value, setValue, placeholder, secureTextEntry, type = 'PRIMARY', textStyle = 'AUTHENTICATION', multiline = false, placeholderTextColor = '#6B6B6B', maxLength = 200, autoCorrect = false}){
    return(
        <View style={[styles.container, styles[`container_${type}`]]}>
            <TextInput
            value={value} 
            onChangeText={setValue}
            placeholder={placeholder} 
            style={[styles[`input_${textStyle}`]]}
            secureTextEntry={secureTextEntry}
            multiline={multiline}
            placeholderTextColor={placeholderTextColor}
            maxLength={maxLength}
            autoCorrect={autoCorrect}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        alignSelf: 'center'
    },
    container_PRIMARY: {
        backgroundColor: '#D6D6D6',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        width: '70%',
        borderRadius: 57,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    container_SECONDARY: {
        marginVertical: 1, 
        width: '90%',
    },
    input_AUTHENTICATION: {
        fontWeight: 'bold',
    },
    input_TITLE: {
        fontSize: 20,
        color: '#FFFFFF',    
    },
    input_BODY: {
        fontSize: 14,
        color: '#FFFFFF',
    },
})