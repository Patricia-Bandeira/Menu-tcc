import react from "react";
import { View, Text, StyleSheet, Pressable} from 'react-native'

const CustomButton = ({ onPress, text, type = "PRIMARY"}) => {
    return(
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 57,
    },

    container_PRIMARY: {
        backgroundColor: '#D6D6D6',
        marginTop: 20,
        width: '35%',
        height: 50,
        padding: 10,
        alignSelf: 'center',
    },

    container_SECONDARY: {
        width: 70,
        height: 32,
        alignSelf: 'flex-end',
        backgroundColor: '#D6D6D6',
        marginTop: 21,
    },

    container_TERTIARY: {
        width: '35%',
        height: 50,
        padding: 10,
        alignSelf: 'center',
    },

    text: {
        color: 'black',
        fontWeight: 'bold',
    },

    text_SECONDARY: {
        fontSize: 12,
        color: '#25252B',
        fontWeight: '500'
    },

    text_TERTIARY: {
        color: '#D1D1D1'
    },
})

export default CustomButton;