import {Text, View, TouchableOpacity, Image,StyleSheet} from 'react-native';
import pontos from '../../img/iconTresPontos.png';
import Curtir from '../../img/iconCurtir.png';
import UserBase from '../../img/userBase.png'

export default function ComentarioPostDestaque () {
    return (
        <View style={styles.container}>
          <View style={styles.miniPerfilView}>
           <Image source={UserBase} style={styles.miniPerfil} />
          </View>
     <Text style={styles.nomeDeUsuarioPost}>Nome Sobrenome</Text>
     <Text style={styles.userArrobaPost}>@user</Text>
     <Text style={styles.dataPostCorpo}>11/10/2022</Text>

     <TouchableOpacity activeOpacity={0.7}>
          <Image source={pontos} style={styles.IconTresPontos} />
     </TouchableOpacity>

     <Text style={styles.txtPostCorpo}>life-expectancy of those of us who live in “advanced” countries, but they have destabilized society, have made life unfulfilling , have subjected human beings to indignities, ha</Text>
     <TouchableOpacity activeOpacity={0.7}>
          <Image source={Curtir} style={styles.iconCurtir} />
     </TouchableOpacity>
</View>
    );
}
const styles = StyleSheet.create({
     container:{
          backgroundColor: '#000',
          borderColor: 'white',
          borderBottomWidth: 0.3,
          alignItems: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'wrap',
     },
     miniPerfilView: {
          width: 52,
          height: 52,
          borderRadius: 20,
          marginLeft: '5%',
          marginTop:'5%'
     },
     miniPerfil: {
          width: '100%',
          height: '100%',
          borderRadius: 50,
     },
     nomeDeUsuarioPost: {
          marginTop:'5%',
          left: '0.5%',
          fontWeight: 'bold',
          fontSize: 15,
          color: '#fff',
     },
     dataPostCorpo:{
          color: '#D6D6D6',
          opacity: 0.5,
          alignSelf: 'flex-end',
          fontSize: 10,
          fontStyle: 'normal',
          marginBottom: '8%',
          marginLeft: '45%'
     },
     userArrobaPost:{
          color: '#D6D6D6',
          opacity: 0.5,
          alignSelf: 'flex-start',
          fontStyle: 'normal',
          fontSize: 15,
          marginTop:'9.5%',
          marginLeft:'-30%',
          
     },
     IconTresPontos:{
          width: 27,
          height: 27,
          alignSelf: 'flex-end',
          marginTop: '70%',

     },
     txtPostCorpo:{
          color: '#D1D1D1',
          marginLeft: '5%',
          marginRight: '5%',
          marginEnd:'5%',
          marginTop:'5%',
          marginBottom: '5%',
          textAlign:'justify'
     },
     iconCurtir:{
          width: 22,
          height: 23,
          marginLeft:'85%',
          alignSelf: 'flex-end',
          marginBottom:'6%'
     },
 })