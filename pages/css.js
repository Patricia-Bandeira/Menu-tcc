import { StyleSheet } from 'react-native';
export default StyleSheet.create({
      
cabecalho:{
  backgroundColor: '#25252A',
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
  width: 35,
  height: 37,
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
  borderRadius: 40 / 2,
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
}

})
