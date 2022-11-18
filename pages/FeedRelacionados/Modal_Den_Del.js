import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';

export default function ModalPost ({visibleModal, setVisibleModal, ativar}){

    return (

<View>
<Modal
        animationType="fade"
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}>
          <TouchableOpacity style={styles.ViewModal} onPress={() => {setVisibleModal({ modalVisible : false})}}>
          <TouchableOpacity style={styles.btnModal}> 
            <Text style={styles.TxtModal}>Denunciar</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.btnModal}>  
            <Text style={styles.TxtModal}>Apagar</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
 
</View>

    );
}

const styles = StyleSheet.create({ 
 
  ViewModal:{
    width: '100%',
    height: '100%',
    alignItems:'center',
    marginTop: 60
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
  
  });