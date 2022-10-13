import react from "react";
import {View, TouchableOpacity, Image} from 'react-native';
import Css from "../pages/css";
import Comentar from '../img/coment.png';
import Curtir from '../img/Curtir.png';
import Salvar from '../img/Salvar.png';


export default function Like_comentar_salvar () {
    return(
        <View style={Css.row}>
        <TouchableOpacity
        //botao comentar
             activeOpacity={0.7}
             style={Css.botao}>
             <Image source={Comentar} style={Css.iconComentar} />
        </TouchableOpacity>
   
        <TouchableOpacity
        //botao curtir
             activeOpacity={0.7}
             style={Css.botao}>
             <Image source={Curtir} style={Css.iconCurtir} />
        </TouchableOpacity>
        
        <TouchableOpacity
        //botao salvar
             activeOpacity={0.7}
             style={Css.botao}>
             <Image source={Salvar} style={Css.iconSalvar} />
        </TouchableOpacity>
        
        </View>
    );
}
