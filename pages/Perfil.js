import React, { useState } from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, Modal} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import { Feather } from '@expo/vector-icons'; 
import PostUm from '../Componentes/Feed/postFeedExemplo1';
import userBase from '../img/userBase.png';
import { useNavigation } from '@react-navigation/native';

export default function Perfil (){
const [visibleModal, setVisibleModal] = useState(false); 

const onPressConfiguracoes = () =>{
  navigation.navigate('Configurações')
}
  const onPressSalvos = () =>{
    navigation.navigate('Salvos')
  }
  const onPressEditarPerfil = () =>{
    navigation.navigate('EditarPerfil')
  }
  const navigation = useNavigation();
  return (
    
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />
    </View>

   

     <View style={styles.ViewPerfil}>
      <View style={{alignSelf:'center',alignContent:'center'}}> 
        <Image source={userBase} style={styles.fotoPerfil}/>
      </View>

      <Text style={styles.nomeUser}>Nome Sobrenome</Text> 
      <Text style={styles.arrobaUser}>@nomesobr1234</Text> 

      <TouchableOpacity onPress={onPressEditarPerfil} style={styles.editarPerfilbtn}> 
       <Text style={styles.editarPerfiltxt}>Editar perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.btnMaisOps} 
       onPress={() => setVisibleModal(true)}>
      <Feather name="more-horizontal" size={38} color={'#D3D3D3'}/> 
      </TouchableOpacity>
     </View>

    <ScrollView>
      <PostUm/>
      <PostUm/>
      <PostUm/>
    </ScrollView>

     <Modal
        animationType="fade"
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}>
          <TouchableOpacity style={styles.ViewModal} onPress={() => {setVisibleModal({ modalVisible : false})}}>
          <TouchableOpacity onPress={onPressSalvos} style={styles.btnModal}> 
            <Text style={styles.TxtModal}>Salvos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressConfiguracoes} style={styles.btnModal}> 
            <Text style={styles.TxtModal}>Configurações</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
 
    </View>
  );
}