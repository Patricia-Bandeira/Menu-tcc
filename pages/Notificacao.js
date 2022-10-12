import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import Css from './css'
import Vector from '../img/Vector.png';
import UserBase from '../img/userBase.png';
import forum from '../img/forum.png';
import pontos from '../img/3pontos.png';
import Comentar from '../img/coment.png';
import Curtir from '../img/Curtir.png';
import Salvar from '../img/Salvar.png';
import voltar from '../img/voltar.png'

export default function Notificacao (){
  let comentario = 0;
  return (
    
   <View style={Css.container}>

    <View style={Css.cabecalho}>
     <Image source={Vector} style={Css.img} />  
     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIconV}>
          <Image source={voltar} style={Css.icon} />
     </TouchableOpacity>
    </View>


    <View style={Css.post1}>
     <Image source={UserBase} style={Css.perfil} />
     <Text style={Css.nomeSobrenome}>Nome Sobrenome</Text>
     <Text style={Css.data}>11/10/2022</Text>

     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIcon}>
          <Image source={pontos} style={Css.icon} />
     </TouchableOpacity>

     <Text style={Css.user1}>@cicrano</Text>
     <Text style={Css.forum}>#Fórum</Text>
     <Text style={Css.titulo}>Titulo</Text>
     <Text style={Css.txt}>Olá isto é um exemplo apenas de como, supostamente, ficariam os posts na timeline principal. ‘Cause sometimes, I look in her eyes and that’s where I find a glimpse of us. And I try to fall for her touch, but I’m thinking of the way it was.</Text>

     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.tag}>
     </TouchableOpacity>
     
     <View style={Css.row}>
     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIcon}>
          <Image source={Comentar} style={Css.icon3} />
     </TouchableOpacity>

     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIcon}>
          <Image source={Curtir} style={Css.icon2} />
     </TouchableOpacity>

     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIcon}>
          <Image source={Salvar} style={Css.icon1} />
     </TouchableOpacity>
     
     </View>
     </View>
     
<View style={Css.comentario}>
<Image source={UserBase} style={Css.perfil} />
     <Text style={Css.nomeSobrenome}>Nome Sobrenome</Text>
     <Text style={Css.data}>11/10/2022</Text>

     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIcon}>
          <Image source={pontos} style={Css.icon} />
     </TouchableOpacity>

     <Text style={Css.userC}>@beltrano</Text>
     <Text style={Css.txtC}>Olá isto é um exemplo apenas de como, supostamente, ficariam os comentarios Olá isto é um exemplo apenas de como, supostamente, ficariam os comentarios </Text>
     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIcon}>
          <Image source={Curtir} style={Css.iconC} />
     </TouchableOpacity>
</View>
<View style={Css.comentario2}>
<Image source={UserBase} style={Css.perfil} />
     <Text style={Css.nomeSobrenome}>Nome Sobrenome</Text>
     <Text style={Css.data}>11/10/2022</Text>

     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIcon}>
          <Image source={pontos} style={Css.icon} />
     </TouchableOpacity>

     <Text style={Css.userC}>@beltrano</Text>
     <Text style={Css.txtC}>Olá isto é um exemplo apenas de como, supostamente, ficariam os comentarios Olá isto é um exemplo apenas de como, supostamente, ficariam os comentarios </Text>
     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIcon}>
          <Image source={Curtir} style={Css.iconC} />
     </TouchableOpacity>
</View>

<View style={Css.comentario3}>
<Image source={UserBase} style={Css.perfil} />
     <Text style={Css.nomeSobrenome}>Nome Sobrenome</Text>
     <Text style={Css.data}>11/10/2022</Text>

     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIcon}>
          <Image source={pontos} style={Css.icon} />
     </TouchableOpacity>

     <Text style={Css.userC}>@beltrano</Text>
     <Text style={Css.txtC}>Olá isto é um exemplo apenas de como, supostamente, ficariam os comentarios Olá isto é um exemplo apenas de como, supostamente, ficariam os comentarios </Text>
     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.btnIcon}>
          <Image source={Curtir} style={Css.iconC} />
     </TouchableOpacity>
</View>




    </View>
    
  );
}

