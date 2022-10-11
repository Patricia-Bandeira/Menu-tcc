import react from "react";
import { View, Text, StyleSheet} from 'react-native'

const CustomButton = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Teste</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        width: '100%',
        height: 50,
        padding: 10,
        arginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
    },
})

export default CustomButton;