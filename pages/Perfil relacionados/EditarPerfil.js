import React, { useState, useDebugValue } from 'react'
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import Css from '../css'
import Vector from '../../img/Vector.png'
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import AS_API from '@react-native-async-storage/async-storage'
import CustomInput from '../../Componentes/CustomInput';

export default function EditarPerfil (){

  const {control, handleSubmit, formState: {errors}} = useForm();

  console.log(errors)

  const [responsePending, setResponsePending] = useState(false)
  const [EditName, setEditName] = useState()

  const onPressEdit = async data => {
      console.log(data)


      
    const receivedToken = await AS_API.getItem('token')
    const token = receivedToken.slice(1,-1)
    const bearer = `Bearer ${token}`

      try{
          setResponsePending(true)         
          await fetch('https://backend-sestante.herokuapp.com/user/update', {
                  method: 'PUT',
                    withCredentials: true,
                    credentials: 'include', 
                    headers: {
                      'Authorization': bearer,
                      Accept: 'application/json',
                      'Content-Type': 'application/json'},
                      body: JSON.stringify({ 
                      name: data.Nome, 
                      })
                    })
              .then(response => response.json())
              .then(async responseJson => {
                console.log(responseJson)
                setEditName(responseJson)
              })
      }
      catch(error){
          console.log(error)
      }
      setResponsePending(false)
      navigation.navigate('Routes')
  }
    const navigation = useNavigation();

//  const [nome, SetNome]  = useState(''); 
  return ( 
   <View style={Css.container}> 

    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />  
              
    </View>

    
                                            
    <View style={styles.ViewEditarFoto}>
      <TouchableOpacity style={styles.btnEditarFoto}> 
       <Feather name="plus" size={140} color={'#D3D3D3'}/> 
      </TouchableOpacity>
     </View>

    <View>
    <CustomInput
      name="Nome"
      placeholder="Digite seu novo nome" 
      control={control}
      />
    </View>

     <TouchableOpacity onPress={handleSubmit(onPressEdit)}style={styles.btnSalvar}> 
      <Feather name="check" size={60} color={'#808080'}/> 
     </TouchableOpacity>
       
    </View>
  );
}

const styles = StyleSheet.create({ 
  textInput:{
    height: 30,
    width: '83%',
    borderColor: "#d6d6d6",
    borderBottomWidth: 1,
    marginTop:130,
    alignSelf:'center',
    color: '#d6d6d6'
  },
  ViewEditarFoto:{
    flex:0.7,
    backgroundColor:'black',
    marginTop:45
  },
  btnEditarFoto:{
    backgroundColor:'#ffffff',
    width:140,
    height:140,
    borderRadius:100,
    alignSelf:'center'
  },
  btnSalvar:{
    backgroundColor:'#ffffff',
    marginTop:100,
    height:60,
    width:60,
    alignSelf:'flex-end',
    borderRadius:200,
    marginRight:25

  }
})