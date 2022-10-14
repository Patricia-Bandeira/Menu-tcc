import {Text, View, TouchableOpacity, Image} from 'react-native';
import pontos from '../../img/iconTresPontos.png';
import Curtir from '../../img/iconCurtir.png';
import Css from '../../pages/css';
import UserBase from '../../img/userBase.png'

export default function ComentarioPostDestaque () {
    return (
        <View style={Css.comentario}>
<Image source={UserBase} style={Css.perfil} />
     <Text style={Css.nomeSobrenome}>Nome Sobrenome</Text>
     <Text style={Css.data}>11/10/2022</Text>

     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.botao}>
          <Image source={pontos} style={Css.TresPontosIcon} />
     </TouchableOpacity>

     <Text style={Css.userC}>@beltrano</Text>
     <Text style={Css.txtC}>Olá isto é um exemplo apenas de como, supostamente, ficariam os comentarios Olá isto é um exemplo apenas de como, supostamente, ficariam os comentarios </Text>
     <TouchableOpacity
          activeOpacity={0.3}
          style={Css.botao}>
          <Image source={Curtir} style={Css.iconC} />
     </TouchableOpacity>
</View>

    );
}