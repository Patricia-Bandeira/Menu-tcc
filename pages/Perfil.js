import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
export default function Perfil (){
  return (
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img} />
    </View>

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