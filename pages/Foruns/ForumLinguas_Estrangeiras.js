import React,{useState} from "react";
import {View, Image, ScrollView, StyleSheet, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Css from '../css'
import Vector from '../../img/Vector.png';
import Voltar from '../../img/voltar.png'
import Tags from "../../Componentes/Materias_Tags/CustomTags";
import PostUm from "../../Componentes/Feed/postFeedExemplo1";

export default function ForumFilosofia (){

    const [tag1, setTag1] = useState(true)
    const [tag2, setTag2] = useState(true)
    
    const onPressTag1 = () =>{
     setTag1(current => !current)
    }
    const onPressTag2 = () =>{
     setTag2(current => !current)
    }

    const navigation = useNavigation()

    const onPressVoltar = () => {
        navigation.navigate('Routes')
    }

  return (
   <View style={Css.container}>
   
        <View style={Css.cabecalho}>
            <Image source={Vector} style={Css.img} />
            <Pressable onPress={onPressVoltar} style={styles.botaoVoltar}>
                <Image source={Voltar} style={styles.imagemVoltar}></Image>
            </Pressable>
        </View>
            <ScrollView>
        <View style={styles.container}>
            <View style={styles.containerMateria}>
                <Text style={styles.textMateria}>LE</Text>
            </View>
            <Text style={styles.textTitle}>Línguas Estrangeiras</Text>
            <Text style={styles.textDescription}>História é a ciência que estuda o ser humano e sua ação no tempo e no espaço concomitantemente à análise de processos e eventos ocorridos no passado.</Text>
            <Text style={styles.textUnderline}>Tags</Text>
            <View style={styles.containerTags}>
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
            <Text style={styles.textUnderline}>Posts</Text>
        </View>
            </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        alignSelf: 'center'
    },
    containerMateria: {
        marginTop: 25,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: '#D6D6D6',
        width: 96,
        height: 96,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTags:{

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        alignSelf: "center",
    },
    textMateria: {
        fontSize: 60,
        color: '#000000',
        fontWeight: '600',
    },
    textTitle: {
        color: '#D6D6D6',
        fontSize: 30,
        fontWeight: 'bold',
    },
    textDescription: {
        color: '#D6D6D6',
        fontSize: 15,
    },
    textUnderline: {
        marginVertical: 25,
        width: 90,
        color: '#D6D6D6',
        fontSize: 25,
        fontWeight: '600',
        borderBottomColor: '#D6D6D6',
        borderWidth: 1,
        alignSelf: 'center',
        textAlign: 'center',
    },
    imagemVoltar: {
        alignSelf: 'flex-start',
    },
    botaoVoltar: {
        alignSelf: 'flex-start',
        top: -8,
    },
})