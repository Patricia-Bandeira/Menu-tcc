import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Materia(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Matéria</Text>
            <View style={styles.innerContainer}>
                <Text>
                    teste {"\n"} {"\n"} {"\n"} {"\n"}
                </Text>
            </View>
        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginBottom: 15,
    },
    text: {
        marginLeft: 3,
        fontSize: 20,
        fontWeight: '600',
    },
    innerContainer: {
        backgroundColor: '#000',
        borderRadius: 10,
    },
})
