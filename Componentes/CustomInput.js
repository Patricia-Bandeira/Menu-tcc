import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from 'react-native';


export default function CustomInput({value, setValue, placeholder, secureTextEntry,}){
    return(
        <View style={styles.container}>
            <TextInput
            value={value} 
            onChangeText={setValue}
            placeholder={placeholder} 
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D6D6D6',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        width: '70%',
        borderRadius: 57,
        paddingHorizontal: 10,
        marginVertical: 10,
        alignSelf: 'center'
    },
    input: {
        fontWeight: 'bold',
        
    },
})