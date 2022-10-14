import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import Tags from "./CustomTags";

export default function Linguas_Estrangeiras(){ 

const [tag1, setTag1] = useState(true)
const [tag2, setTag2] = useState(true)

const onPressTag1 = () =>{
 setTag1(current => !current)
}
const onPressTag2 = () =>{
 setTag2(current => !current)
}


    return(
        <View style={styles.container}>
            <Text style={styles.text}>Línguas Estrangeiras</Text>
            <View style={styles.innerContainer}>
                    <Tags
                    onPress={onPressTag1}
                    type={ tag1 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Inglês'}
                    />
                    <Tags
                    onPress={onPressTag2}
                    type={ tag2 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Espanhol'}
                    />
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
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        borderColor: '#000',
        borderWidth: 5
    },
})