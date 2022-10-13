import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Tags from "./CustomTags";

export default function Materia(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Matéria</Text>
            <View style={styles.innerContainer}>
                    <Tags/>
                    <Tags/>
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
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
})
