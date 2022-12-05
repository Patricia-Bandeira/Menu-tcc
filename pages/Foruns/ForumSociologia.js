import React,{useState} from "react";
import {View, Image, ScrollView, StyleSheet, Text, TouchableOpacity, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Css from '../css'
import Vector from '../../img/Vector.png';
import Voltar from '../../img/voltar.png'
import Tags from "../../Componentes/Materias_Tags/CustomTags";
import Comentar from '../../img/iconComentar.png';
import Curtir from '../../img/iconCurtir.png';
import Salvar from '../../img/iconSalvar.png';
import tresPontos from '../../img/iconTresPontos.png';
import AS_API from '@react-native-async-storage/async-storage';
import UserBase from '../../img/userBase.png';


export default function ForumSociologia (){
    
    const [responsePending, setResponsePending] = useState(false)

    const [tag1, setTag1] = useState(true)
    const [tag2, setTag2] = useState(true)
    const [tag3, setTag3] = useState(true)
    const [tag4, setTag4] = useState(true)
    const [tag5, setTag5] = useState(true)
    const [tag6, setTag6] = useState(true)
    const [tag7, setTag7] = useState(true)
    const [tag8, setTag8] = useState(true)
    
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

    const navigation = useNavigation()

    const onPressVoltar = () => {
        navigation.navigate('Routes')
    }


    const onPressPost = (id) => {
        const receivedPostId = 73
        const postId = JSON.stringify(receivedPostId)
        AS_API.setItem('postId', postId)
        navigation.navigate('PostEmDestaque')
      }

    const onPressComentar = (id) => {
        const receivedPostId = 73
        const postId = JSON.stringify(receivedPostId)
        AS_API.setItem('postId', postId)
        navigation.navigate('Comentar')
      }
    
    
      const onPressSendSave = async id => {
        const bool = '1'
        const receivedPostId = 73
        const postId = JSON.stringify(receivedPostId)
        const receivedToken = await AS_API.getItem('token')
        const token = receivedToken.slice(1,-1)
        const bearer = `Bearer ${token}`
      
        setResponsePending(true)
        try{           
            await fetch(`https://sextans.loca.lt/post/${postId}/saved/${bool}`, {
                    method: 'POST',
                    withCredentials: true,
                    credentials: 'include',
                    headers: {
                Accept: 'application/json',
                'Authorization': bearer,
                'Content-Type': 'application/json'},
                body: JSON.stringify({
                        content: bool, 
                    })
                })
                .then(response => response.json())
                .then(async responseJson => {
                    console.log(responseJson)
                })
        }
        catch(error){
            console.log(error)
        }
        setResponsePending(false)
      }
      
      const onPressSendLike = async id => {
        const bool = '1'
        const receivedPostId = 73
        const postId = JSON.stringify(receivedPostId)
        const receivedToken = await AS_API.getItem('token')
        const token = receivedToken.slice(1,-1)
        const bearer = `Bearer ${token}`
      
        setResponsePending(true)
        try{           
            await fetch(`https://sextans.loca.lt/post/${postId}/liked/${bool}`, {
                    method: 'POST',
                    withCredentials: true,
                    credentials: 'include',
                    headers: {
                Accept: 'application/json',
                'Authorization': bearer,
                'Content-Type': 'application/json'},
                body: JSON.stringify({
                        content: bool, 
                    })
                })
                .then(response => response.json())
                .then(async responseJson => {
                    console.log(responseJson)
                })
        }
        catch(error){
            console.log(error)
        }
        setResponsePending(false)
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
                <Text style={styles.textMateria}>S</Text>
            </View>
            <Text style={styles.textTitle}>Sociologia</Text>
            <Text style={styles.textDescription}>A Sociologia é uma das ciências humanas que estuda a sociedade, ou seja, estuda o comportamento humano em função do meio e os processos que interligam os indivíduos em associações, grupos e instituições.</Text>
            <Text style={styles.textUnderline}>Tags</Text>
            <View style={styles.containerTags}>
            <Tags
                    onPress={onPressTag1}
                    type={ tag1 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Cultura'}
                    />
                    <Tags
                    onPress={onPressTag2}
                    type={ tag2 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Sociedade'}
                    />
                    <Tags
                    onPress={onPressTag3}
                    type={ tag3 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Brasileira'}
                    />
                    <Tags
                    onPress={onPressTag4}
                    type={ tag4 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Política'}
                    />
                    <Tags
                    onPress={onPressTag5}
                    type={ tag5 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Trabalhista'}
                    />
                    <Tags
                    onPress={onPressTag6}
                    type={ tag6 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Movimentos Socias'}
                    />
                    <Tags
                    onPress={onPressTag7}
                    type={ tag7 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Contemporânea'}
                    />
                    <Tags
                    onPress={onPressTag8}
                    type={ tag8 ? 'PRIMARY' : 'SECONDARY'}
                    text={'Outros'}
                    />
            </View>
            <Text style={styles.textUnderline}>Posts</Text>
        </View>

        <View style={Css.postCard}>
        <TouchableOpacity onPress={() => onPressPost()}>
            <Image source={UserBase} style={Css.fotoPerfilPost}/>
            <Text style={Css.nomeDeUsuarioPost}>Equipe Sextans</Text>
            <Text style={Css.userArrobaPost}> @Sextans </Text>
            <Text style={Css.dataPostCorpo}>04 Dec 2022</Text>
            <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} activeOpacity={0.2}>
                <Image source={tresPontos} style={Css.IconTresPontos}/>
            </TouchableOpacity>
            <Text style={Css.forumPostCorpo}> #Sociologia </Text>
            <Text style={Css.tituloPostCorpo}> Você sabe qual é a definição de sociedade? </Text>
           
             <Text style={Css.txtPostCorpo}>A sociedade é uma agremiação de pessoas com a finalidade de preservar a sobrevivência comum de todos que se enquadrem nas normas sociais. Uma socieda...</Text>
             
            <TouchableOpacity activeOpacity={0.7} style={Css.tagPost}>
                <Text style={Css.txtTag}> Sociedade </Text>
            </TouchableOpacity>
            <View style={styles.row}>
                  <TouchableOpacity onPress={() => onPressComentar()} activeOpacity={0.7}> 
                    <Image source={Comentar} style={Css.iconComentar}/>
                  </TouchableOpacity>
   
                  <TouchableOpacity onPress={() => onPressSendLike()} activeOpacity={0.7}>
                      <Image source={Curtir} style={Css.iconCurtir}/>
                  </TouchableOpacity>
        
                  <TouchableOpacity onPress={() => onPressSendSave()} activeOpacity={0.7}>
                      <Image source={Salvar} style={Css.iconSalvar} />
                  </TouchableOpacity>
                </View>
        </TouchableOpacity>
        </View>

            </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginBottom: '8%',
        marginEnd: '3%',
        marginTop: '-8%'
    },
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