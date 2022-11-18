import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import Tags from "./CustomTags";

export default function Fisica(){ 

const [tag1, setTag1] = useState(true)
const [tag2, setTag2] = useState(true)
const [tag3, setTag3] = useState(true)
const [tag4, setTag4] = useState(true)
const [tag5, setTag5] = useState(true)
const [tag6, setTag6] = useState(true)
const [tag7, setTag7] = useState(true)
const [tag8, setTag8] = useState(true)
const [tag9, setTag9] = useState(true)
const [tag10, setTag10] = useState(true)
const [tag11, setTag11] = useState(true)
const [tag12, setTag12] = useState(true)

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
const onPressTag8 = () =>{
 setTag8(current => !current)
}
const onPressTag9 = () =>{
 setTag9(current => !current)
}
const onPressTag10 = () =>{
 setTag10(current => !current)
}
const onPressTag11 = () =>{
 setTag11(current => !current)
}
const onPressTag12 = () =>{
 setTag12(current => !current)
}


    return(
        <View style={styles.container}>
            <Text style={styles.text}>Física</Text>
            <View style={styles.innerContainer}>
                    <Tags
                    onPress={onPressTag1}
                    type={ tag1 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Eletrodinâmica'}
                    />
                    <Tags
                    onPress={onPressTag2}
                    type={ tag2 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Termologia'}
                    />
                    <Tags
                    onPress={onPressTag3}
                    type={ tag3 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Ondulatória'}
                    />
                    <Tags
                    onPress={onPressTag4}
                    type={ tag4 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Cinemática'}
                    />
                    <Tags
                    onPress={onPressTag5}
                    type={ tag5 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Fluidos'}
                    />
                    <Tags
                    onPress={onPressTag6}
                    type={ tag6 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Óptica'}
                    />
                    <Tags
                    onPress={onPressTag7}
                    type={ tag7 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Eletrostática'}
                    />
                    <Tags
                    onPress={onPressTag8}
                    type={ tag8 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Dinâmica'}
                    />
                    <Tags
                    onPress={onPressTag9}
                    type={ tag9 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Trabalho e energia'}
                    />
                    <Tags
                    onPress={onPressTag10}
                    type={ tag10 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Magnetismo'}
                    />
                    <Tags
                    onPress={onPressTag11}
                    type={ tag11 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Estática'}
                    />
                    <Tags
                    onPress={onPressTag12}
                    type={ tag12 ? 'PRIMARY' : 'SECONDARY'}
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