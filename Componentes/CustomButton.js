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
    },

    container_PRIMARY: {
        backgroundColor: '#D6D6D6',
        marginTop: 20,
        width: '35%',
        height: 50,
        padding: 10,
        alignSelf: 'center',
        borderRadius: 57,
    },

    container_SECONDARY: {
        width: 70,
        height: 32,
        alignSelf: 'flex-end',
        backgroundColor: '#D6D6D6',
        marginTop: 21,
        borderRadius: 57,
    },

    container_TERTIARY: {
        width: '35%',
        height: 50,
        padding: 10,
        alignSelf: 'center',
        borderRadius: 57,
    },
    container_QUARTENARY: {
        backgroundColor: '#D6D6D6',
        width: '45%',
        height: 65,
        padding: 10,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    container_QUARTENARY_SPECIAL: {
        backgroundColor: '#D6D6D6',
        alignSelf: 'center',
        width: '95%',
        height: 65,
        padding: 10,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 8,
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
    text_QUARTENARY: {
        fontSize: 20,
        fontWeight: '600',
    },
    text_QUARTENARY_SPECIAL: {
        fontSize: 20,
        fontWeight: '600',
    },
})

export default CustomButton;