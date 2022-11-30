import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Css from "../../pages/css";
import Comentar from '../../img/iconComentar.png';
import Curtir from '../../img/iconCurtir.png';
import Salvar from '../../img/iconSalvar.png';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import AS_API from '@react-native-async-storage/async-storage'

export default function Like_comentar_salvar ({onPressComentar, onPressSendLike, onPressSendSave, id}) {
        let bool1 = '1'
        let bool2 = '1'
        const {control, handleSubmit} = useForm();

        const [responsePending, setResponsePending] = useState(false)
 
    const onPressSendSave = async data => {
        bool1 = '0'
        const postId = await AS_API.getItem('postId')
        const receivedToken = await AS_API.getItem('token')
        const token = receivedToken.slice(1,-1)
        const bearer = `Bearer ${token}`

        setResponsePending(true)
        try{           
            await fetch(`https://sextans.loca.lt/post/${postId}/saved/${bool1}`, {
                    method: 'POST',
                    withCredentials: true,
                    credentials: 'include',
                    headers: {
                Accept: 'application/json',
                'Authorization': bearer,
                'Content-Type': 'application/json'},
                body: JSON.stringify({
                        content: data.Like, 
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

    const onPressSendLike = async data => {
        bool2 = '0'
        const postId = await AS_API.getItem('postId')
        const receivedToken = await AS_API.getItem('token')
        const token = receivedToken.slice(1,-1)
        const bearer = `Bearer ${token}`

        setResponsePending(true)
        try{           
            await fetch(`https://sextans.loca.lt/post/${postId}/liked/${bool2}`, {
                    method: 'POST',
                    withCredentials: true,
                    credentials: 'include',
                    headers: {
                Accept: 'application/json',
                'Authorization': bearer,
                'Content-Type': 'application/json'},
                body: JSON.stringify({
                        content: data.Like, 
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



    return(
        <View key={id} style={styles.row}>
        <TouchableOpacity onPress={onPressComentar} key={id} activeOpacity={0.7}> 
             <Image source={Comentar} style={Css.iconComentar}/>
        </TouchableOpacity>
   
        <TouchableOpacity onPress={onPressSendLike} key={id} activeOpacity={0.7}>
            <Image source={Curtir} style={Css.iconCurtir}/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onPressSendSave} key={id} activeOpacity={0.7}>
             <Image source={Salvar} style={Css.iconSalvar} />
        </TouchableOpacity>
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
    }
})