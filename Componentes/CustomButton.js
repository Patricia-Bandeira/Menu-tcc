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
        width: '35%',
        height: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 57,
    },

    container_PRIMARY: {
        backgroundColor: '#D6D6D6',
        marginTop: 20,
    },

    container_TERTIARY: {

    },

    text: {
        color: 'black',
        fontWeight: 'bold',
    },

    text_TERTIARY: {
        color: '#D1D1D1'
    },
})

export default CustomButton;