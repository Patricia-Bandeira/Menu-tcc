import { StyleSheet } from 'react-native';
export default StyleSheet.create({
      
cabecalho:{
  backgroundColor: '#0A5363',
  width: '100%',
  height: 90,
  // alignItems: 'center',
  padding: 20,
  }, 

container: {
  flex: 1,
  backgroundColor: 'black',
  },
img:{
  width: 40,
  height: 40,
  top:20,
  alignSelf: 'center'
  },
card: {
    backgroundColor: '#000',
    padding: 20,
    marginVertical: 5,
    flexDirection: 'row',
    borderColor: "white",
    borderBottomWidth: 0.5,
  },
nomeDeUsuario: {
  fontWeight: 'bold',
  fontSize: 15,
  color: '#fff',
  marginLeft: 10,
  paddingTop: 15,
},
miniPerfilView: {
  width: 52,
  height: 52,
  borderRadius: 20,
},
miniPerfil: {
  width: '100%',
  height: '100%',
  borderRadius: 50,
},
nadaPorAquipngView: {
  width: 300,
  height: 300,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft:40,
  marginRight:50,
  marginTop: 150,
},
nadaPorAquipng: {
  width: '100%',
  height: '100%',
},
botaoVerMaisTAG:{
  alignSelf: 'flex-end',
  top: -8,
  
},
IconMaisTags:{
  width: 27,
  height: 27,
  alignSelf: 'flex-end'
},
IconTresPontos:{
  width: 27,
  height: 27,
  alignSelf:'flex-end',
  marginRight:10,
  bottom:50
},
fotoPerfilPost:{
  width: 51,
  height: 51,
  top:15,
  left:15,
},
postCard: {
  width:'100%',
  backgroundColor: '#000',
  borderColor: 'white',
  borderBottomWidth: 0.5,
},
iconSalvar:{
  width: 22,
  height: 28,
  alignSelf: 'flex-end',
  marginVertical:5,
  marginRight:10
    },
iconCurtir:{
  width: 27,
  height: 28,
  alignSelf: 'flex-end',
  marginHorizontal:12,
  marginVertical:5
    },
iconComentar:{
  width: 28,
  height: 28,
  marginVertical:5,
  alignSelf: 'flex-end'
    },
    txtPostCorpo:{
      color: '#D1D1D1',
      marginTop:9,
      textAlign:'justify',
      marginHorizontal:15,
      alignSelf:'center'
    },
    verMais:{
      color: '#616161',
      left: '40%',
      marginEnd:29,
      marginTop:9,
    },
    userArrobaPost:{
      color: '#D6D6D6',
      opacity: 0.5,
      fontStyle: 'normal',
      fontSize: 15,
      left:70,
      bottom:30,
    },
  forumPostCorpo:{
      color: '#D6D6D6',
      left: '20%',
      marginTop: '-8%',  
      left:70,
      bottom:35,

  
    },
  
    tituloPostCorpo:{
      color: '#D6D6D6',
      fontSize: 20,
      left:10,
      fontWeight: 'bold',
      alignSelf:'flex-start',
      justifyContent:'center'
    },
  dataPostCorpo:{
      color: '#D6D6D6',
      opacity: 0.5,
      fontSize: 10,
      fontStyle: 'normal',
      alignSelf: 'flex-end',
      marginRight: 30,
      bottom:30,
    },
    fotoExemploPost:{
      width:330,
    height: 330,
    borderRadius:10,
    marginLeft:'7%',
    marginRight: '5%',
    marginTop: 20,
    marginBottom:20
    },
    nomeDeUsuarioPost: {
      fontWeight: 'bold',
      fontSize: 15,
      left:70,
      bottom:30,
      color: '#fff',
    },
    tagPost: {
    paddingHorizontal: 10,
    paddingVertical: 2, 
    marginVertical: 5,
    backgroundColor: '#D1D1D1',
    borderRadius: 57,
    marginLeft:'5%',
    marginTop: '8%',
    justifyContent: 'center',
    alignSelf: 'flex-start'
    },
    txtTag: {
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    iconVoltar: {
      width: 27,
      height: 27,
      alignSelf: 'flex-start'

    },
    btnIconVoltar:{
      alignSelf: 'flex-start',
      top: -8,
      
    },
})
