import {Text, View, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import AS_API from '@react-native-async-storage/async-storage'
import Css from '../css'
import CustomInput from '../../Componentes/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

export default function Comentar (){

    const navigation = useNavigation();

    const {control, handleSubmit} = useForm();

    const [responsePending, setResponsePending] = useState(false)

    const [selectedPost, setSelectedPost] = useState({
        "date": null,
        "description": null,
        "id": null,
        "tag": {
          "forum": {
            "id": null,
            "name": null,
          },
          "id": null,
          "name": null,
        },
        "title": null,
        "user": {
          "name": null,
          "username": null,
        },
      })
    
    const onPressSend = async data => {
        
        const postId = await AS_API.getItem('postId')
        const receivedToken = await AS_API.getItem('token')
        const token = receivedToken.slice(1,-1)
        const bearer = `Bearer ${token}`

        setResponsePending(true)
        try{           
            await fetch(`https://backend-sestante.herokuapp.com/post/${postId}/comment`, {
                    method: 'POST',
                    withCredentials: true,
                    credentials: 'include',
                    headers: {
                Accept: 'application/json',
                'Authorization': bearer,
                'Content-Type': 'application/json'},
                body: JSON.stringify({
                        content: data.Comentario, 
                    })
                })
                .then(response => response.json())
                .then(async responseJson => {
                    console.log(responseJson)
                    navigation.navigate('PostEmDestaque')
                })
        }
        catch(error){
            console.log(error)
        }
        setResponsePending(false)
    }

    const getPost = async () => {
    
        const postId = await AS_API.getItem('postId')
        console.log(postId)
        const receivedToken = await AS_API.getItem('token')
        const token = receivedToken.slice(1,-1)
        const bearer = `Bearer ${token}`
        
        setResponsePending(true)
        
        try{
            await fetch(`https://backend-sestante.herokuapp.com/post/${postId}/show`, {
                method: 'GET',
                withCredentials: true,
                credentials: 'include',
                    headers: {
                        'Authorization': bearer,
                        'Content-Type': 'application/json'
                    },
                })
                .then(response => response.json())
                .then(async responseJson => {
                    console.log(responseJson)
                    setSelectedPost(responseJson)
                    
                })
            }
            catch(error){
                console.log(error)
            }

        setResponsePending(true)
        }
        
        useEffect(() => {
            getPost()
        },[])
        
        return (
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
    <TouchableOpacity
         //botao de postar
            onPress={handleSubmit(onPressSend)}
            activeOpacity={0.7}
            style={styles.tagPost}>
                <Text style={styles.txtTag}>Postar</Text>
        </TouchableOpacity>
    </View>
    
    <View style={styles.coment}>
    <Text style={styles.nomeSobrenomeCC}>{selectedPost.user.name}</Text>
    <Text style={styles.userCC}>@{selectedPost.user.username}</Text>
    <Text style={styles.tituloCC}>{selectedPost.title}</Text>
     <Text numberOfLines={1} style={styles.txtCC}>{selectedPost.description}</Text>
    </View>
    
    <View style={styles.View} >
        <CustomInput
        name="Comentario"
        placeholder={"Digite..."}
        placeholderTextColor={'#808080'}
        textStyle='BODY'
        multiline={true}
        autoCorrect={true}
        type='SECONDARY'
        maxLength={2000}
        control={control}
        />
    {/* <TextInput numberOfLines={10} multiline={true} placeholderTextColor="#616161" placeholder="Digite seu comentário..." style={styles.textInput} /> */}
    </View>

    </View>
  );
}
const styles = StyleSheet.create({
    coment:{
        width: '100%',
        height: 120,
        marginTop:10,
        borderColor: "white",
        borderBottomWidth: 0.3,
    },
    nomeSobrenomeCC:{
        left: '5%',
        fontSize: 13,
        color: '#D1D1D1',
        marginTop: '2%',
        fontWeight: 'bold'
    },
    userCC:{
        color: '#D1D1D1',
        opacity: 0.7,
        marginLeft:'-22%',
        marginTop:'-4.3%',
        alignSelf: 'center',
        fontStyle: 'normal',
        fontSize: 10,
    },
    tituloCC:{
        color: '#D1D1D1',
        marginLeft: '5%',
        fontSize: 25,
        marginTop:'4%',
    },
    txtCC:{
        color: '#D1D1D1',
        left: '5%',
        marginEnd:29,
        width: 340,
        marginTop:9,
        fontSize:13
    },
    textInput: {
        height: 150,
        width: '85%',
        borderColor: "white",
        borderBottomWidth: 0.3,
        alignSelf:'center',
        color: 'white',
        marginTop:'20%',
        textAlignVertical:'bottom',

    },
    View:{
        marginBottom:'80%'
    },
    tagPost: {
        width: 99,
      height: 25,
      backgroundColor: '#D1D1D1',
      borderRadius: 57,
      alignSelf: 'flex-end',
      marginTop: '8%',
      justifyContent: 'center'
    },
      txtTag: {
        fontWeight: 'bold',
        alignSelf: 'center'
    },
})