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



const styles = StyleSheet.create({ 
 
  ViewPerfil:{  
    alignItems:'center',
    backgroundColor:'black', 
    height:210, 
    width:'100%',
    borderBottomColor:'#d1d1d1',
    borderWidth:0.3,
  },
  fotoPerfil:{
    width: 120,
    height: 120,
    marginTop: '5%',
    alignSelf:'center',
  
  },
  nomeUser:{
    color:'#ffffff',
    textAlign:'center',
    fontSize:18,
    marginTop:3,
    alignSelf:'center',

  },
  arrobaUser:{
    color:'#808080',
    textAlign:'center',
    fontSize:12,
    marginTop:-3,
    alignSelf:'center',
  },
  editarPerfilbtn:{
    backgroundColor:'#000',
    height:35,
    width:120,
    marginLeft:255,
    marginTop:-90,
    borderRadius:90,
    borderWidth:1,
    borderColor:'#d6d6d6',
    justifyContent:'center'
  },
  editarPerfiltxt:{
    color:'#d6d6d6',
    alignSelf:'center',
},
btnMaisOps:{
  backgroundColor:'black',
   borderWidth:1,
  borderColor:'#d6d6d6',
  borderRadius:100,
  width:40,
  height:40,
  marginTop:-100,
  marginLeft:302
},
ViewModal:{
  width: '100%',
  height: '100%',
  alignItems:'center'
},
btnModal:{ 
  width: 120,
  backgroundColor: "#111",
  height:40,
  marginRight:20,
  alignSelf:'flex-end'
},
TxtModal:{
  textAlign:'center',
  marginTop:10,
  color:'#ffffff'
},
modalClose:{
  width:'100%',
  height:'100%'
}
})