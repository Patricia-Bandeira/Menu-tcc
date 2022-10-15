import {Text, View, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import Css from './css'

export default function Comentar (){
  return (
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
    <TouchableOpacity
         //botao da  TAG 
            activeOpacity={0.7}
            style={styles.tagPost}>
                <Text style={styles.txtTag}>Postar</Text>
        </TouchableOpacity>
    </View>
    
    <View style={styles.coment}>
    <Text style={styles.nomeSobrenomeCC}>Nome Sobrenome</Text>
    <Text style={styles.userCC}>@userp</Text>
    <Text style={styles.tituloCC}>Titulo</Text>
     <Text numberOfLines={1} style={styles.txtCC}>Olá isto é um exemplo apenas de como, supostamente, ficariam os posts na timeline principal. ‘Cause sometimes, I look in her eyes and that’s where I find a glimpse of us. And I try to fall for her touch, but I’m thinking of the way it was.</Text>
    </View>
    
    <View style={styles.View} >
    <TextInput numberOfLines={10} multiline={true} placeholderTextColor="#616161" placeholder="Digite seu comentário..." style={styles.textInput} />
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