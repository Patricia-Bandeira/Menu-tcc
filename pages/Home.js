import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import PostUm from '../Componentes/post1';
import PostDois from '../Componentes/post2';
import Css from './css';
import Vector from '../img/Vector.png';
import forum from '../img/forum.png';



export default function Home (){
  return (
   <View style={Css.container} >

    <View style={Css.cabecalho}>
     <Image source={Vector} style={Css.img} />
     
     <TouchableOpacity
          activeOpacity={0.7}
          style={Css.botao}>
          <Image source={forum} style={Css.TresPontosIcon} />
     </TouchableOpacity>
    </View>
    {/* cabeçalho */}
     <PostUm/>
     {/* exemplo de postagem 1 */}

     <PostDois/>
     {/* exemplo de post 2 (com imagem) */}
    </View>
  );
}
