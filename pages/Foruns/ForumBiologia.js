import React,{useState} from "react";
import {View, Image, ScrollView, StyleSheet, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Css from '../css'
import Vector from '../../img/Vector.png';
import Voltar from '../../img/voltar.png'
import Tags from "../../Componentes/Materias_Tags/CustomTags";
import PostUm from "../../Componentes/Feed/postFeedExemplo1";

export default function ForumGeografia (){

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
                <Text style={styles.textMateria}>B</Text>
            </View>
            <Text style={styles.textTitle}>Biologia</Text>
            <Text style={styles.textDescription}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
            parturient montes, nascetur ridiculus mus. Donec quam felis,</Text>
            <Text style={styles.textUnderline}>Tags</Text>
            <View style={styles.containerTags}>
            <Tags
                    onPress={onPressTag1}
                    type={ tag1 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Ecologia'}
                    />
                    <Tags
                    onPress={onPressTag2}
                    type={ tag2 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Bioquímica'}
                    />
                    <Tags
                    onPress={onPressTag3}
                    type={ tag3 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Citologia'}
                    />
                    <Tags
                    onPress={onPressTag4}
                    type={ tag4 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Histologia'}
                    />
                    <Tags
                    onPress={onPressTag5}
                    type={ tag5 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Fisiologia'}
                    />
                    <Tags
                    onPress={onPressTag6}
                    type={ tag6 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Bioenergética'}
                    />
                    <Tags
                    onPress={onPressTag7}
                    type={ tag7 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Microbiologia'}
                    />
                    <Tags
                    onPress={onPressTag8}
                    type={ tag8 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Evolução'}
                    />
                    <Tags
                    onPress={onPressTag9}
                    type={ tag9 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Botânica'}
                    />
                    <Tags
                    onPress={onPressTag10}
                    type={ tag10 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Taxonomia'}
                    />
                    <Tags
                    onPress={onPressTag11}
                    type={ tag11 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Genética'}
                    />
                    <Tags
                    onPress={onPressTag12}
                    type={ tag12 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Outros'}
                    />
            </View>
            <Text style={styles.textUnderline}>Posts</Text>
        </View>
            <PostUm/>
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