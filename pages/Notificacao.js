import {View, Image, ScrollView } from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png'
import nadaPorAqui from '../img/nadpAquiNotifi.png'
import Container_notificacao from '../Componentes/componente.notificacao';

export default function Notificacao (){
  let notificacoes = 3;
  return (
   <View style={Css.container}>
   
    <View style={Css.cabecalho}>
    <Image source={Vector} style={Css.img}/>
       

          </View>
          {notificacoes > 0 ?
          <View>
          <ScrollView>
            <Container_notificacao/>
            <Container_notificacao/>
            <Container_notificacao/>
          </ScrollView>
          </View>
            :
            <View style={Css.nadaPorAquipngView}>
            <Image
             source={nadaPorAqui} 
             style={Css.nadaPorAquipng}
             />
            </View>
          }
         </View>

  );
    

}