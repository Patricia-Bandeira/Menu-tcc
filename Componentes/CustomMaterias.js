import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import Tags from "./CustomTags";

export default function Materia(){

const [apertou, setApertou] = useState(false)

const onPressTags = () =>{
 setApertou(current => !current)
}

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Matéria</Text>
            <View style={styles.innerContainer}>
                    <Tags
                    onPress={onPressTags}
                    type={ apertou ? 'PRIMARY' : 'SECONDARY'}
                    text={'Equações'}
                    />
                    <Tags
                    onPress={onPressTags}
                    type={ apertou ? 'PRIMARY' : 'SECONDARY'}
                    text={'Proporção'}
                    />
                    <Tags
                    onPress={onPressTags}
                    type={ apertou ? 'PRIMARY' : 'SECONDARY'}
                    text={'Algebra'}
                    />
                    <Tags
                    onPress={onPressTags}
                    type={ apertou ? 'PRIMARY' : 'SECONDARY'}
                    text={'Trigonometria'}
                    />
                    <Tags
                    onPress={onPressTags}
                    type={ apertou ? 'PRIMARY' : 'SECONDARY'}
                    text={'Estatística'}
                    />
                    <Tags
                    onPress={onPressTags}
                    type={ apertou ? 'PRIMARY' : 'SECONDARY'}
                    text={'Probabilidade'}
                    />
                    <Tags
                    onPress={onPressTags}
                    type={ apertou ? 'PRIMARY' : 'SECONDARY'}
                    text={'Geometria'}
                    />
                    <Tags
                    onPress={onPressTags}
                    type={ apertou ? 'PRIMARY' : 'SECONDARY'}
                    text={'Funções'}
                    />
                    <Tags
                    onPress={onPressTags}
                    type={ apertou ? 'PRIMARY' : 'SECONDARY'}
                    text={'Porcentagem'}
                    />
                    <Tags
                    onPress={onPressTags}
                    type={ apertou ? 'PRIMARY' : 'SECONDARY'}
                    text={'Matemática Financeira'}
                    />
                    <Tags
                    onPress={onPressTags}
                    type={ apertou ? 'PRIMARY' : 'SECONDARY'}
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
