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
    borderBottomWidth: 0.3,
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
corponotifiacao: {
  fontWeight: 'thin',
  fontSize: 15,
  color: '#fff',
  alignContent: 'center',
  marginLeft: 3,
  paddingTop: 15,
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
  alignSelf: 'flex-end',
  marginTop: '-10%'
},
fotoPerfilPost:{
  width: 51,
  height: 51,
  marginTop: '5%',
  marginLeft: '5%'

},
postCard: {
  backgroundColor: '#000',
  borderColor: 'white',
  borderBottomWidth: 0.3,
  alignItems: 'flex-start',
  flexDirection: 'row',
  flexWrap: 'wrap',
},
iconSalvar:{
  width: 22,
  height: 28,
  marginLeft:5
    },
iconCurtir:{
  width: 27,
  height: 28,
  marginLeft:18,
  marginRight:13,
  alignSelf: 'flex-end'
    },
iconComentar:{
  width: 28,
  height: 28,

    },
    txtPostCorpo:{
      color: '#D1D1D1',
      marginLeft:'5%',
      marginRight:'5%',
      marginEnd:29,
      marginTop:9,
      textAlign:'justify'
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
      left: '20%',
      fontStyle: 'normal',
      fontSize: 15,
    },
  forumPostCorpo:{
      color: '#D6D6D6',
      left: '20%',
      marginTop: '-8%',

  
    },
  
    tituloPostCorpo:{
      color: '#D6D6D6',
      marginLeft: '7%',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: '5%'
    },
  dataPostCorpo:{
      color: '#D6D6D6',
      opacity: 0.5,
      alignSelf: 'flex-end',
      fontSize: 10,
      fontStyle: 'normal',
      marginRight: '7%',
      marginBottom: '5%'
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
      left: '15%',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#fff',
      marginLeft: '5%',
      marginTop: '-12%'
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
