import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import Tags from "./CustomTags";

export default function Quimica(){

const [tag1, setTag1] = useState(true)
const [tag2, setTag2] = useState(true)
const [tag3, setTag3] = useState(true)
const [tag4, setTag4] = useState(true)
const [tag5, setTag5] = useState(true)
const [tag6, setTag6] = useState(true)
const [tag7, setTag7] = useState(true)

const onPressTag1 = () =>{
 setTag1(current => !current)
}
const onPressTag2 = () =>{
 setTag2(current => !current)
}
const onPressTag3 = () =>{
 setTag3(current => !current)
}
const onPressTag4 = () =>{
 setTag4(current => !current)
}
const onPressTag5 = () =>{
 setTag5(current => !current)
}
const onPressTag6 = () =>{
 setTag6(current => !current)
}
const onPressTag7 = () =>{
 setTag7(current => !current)
}


    return(
        <View style={styles.container}>
            <Text style={styles.text}>Química</Text>
            <View style={styles.innerContainer}>
                    <Tags
                    onPress={onPressTag1}
                    type={ tag1 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Estequiometria'}
                    />
                    <Tags
                    onPress={onPressTag2}
                    type={ tag2 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Ligações'}
                    />
                    <Tags
                    onPress={onPressTag3}
                    type={ tag3 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Orgânica'}
                    />
                    <Tags
                    onPress={onPressTag4}
                    type={ tag4 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Substâncias'}
                    />
                    <Tags
                    onPress={onPressTag5}
                    type={ tag5 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Misturas'}
                    />
                    <Tags
                    onPress={onPressTag6}
                    type={ tag6 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Eletroquímica'}
                    />
                    <Tags
                    onPress={onPressTag7}
                    type={ tag7 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Outros'}
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