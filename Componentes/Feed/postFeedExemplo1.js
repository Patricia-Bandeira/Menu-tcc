import react from "react";
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Css from "../../pages/css";
import UserBase from '../../img/userBase.png';
import tresPontos from '../../img/iconTresPontos.png';
import { useNavigation } from '@react-navigation/native';
import Like_comentar_salvar from "./interacoesPosts.js";



export default function PostUm () {

    const onPressPostDestaque = () =>{
        navigation.navigate('PostEmDestaque')
    }
    const navigation = useNavigation();

    return(
        <View style={Css.postCard} >
            
        <TouchableOpacity onPress={onPressPostDestaque}
        //informação do user
            activeOpacity={0.7}>

        <Image source={UserBase} style={Css.fotoPerfilPost}/>
        <Text style={Css.nomeDeUsuarioPost}>Nome Sobrenome</Text>
        <Text style={Css.userArrobaPost} >@fulaninho</Text>
        <Text style={Css.dataPostCorpo} >10/10/2022</Text>

        <TouchableOpacity 
        // botao tres pontos
            activeOpacity={0.7}> 
            <Image source={tresPontos} style={Css.IconTresPontos}/>
        </TouchableOpacity>

        {/* corpo do post */}
  
        <Text style={Css.forumPostCorpo} >#Fórum</Text>
        <Text style={Css.tituloPostCorpo}> Titulo</Text>
        <Text numberOfLines={3.5} style={Css.txtPostCorpo}  >
             Out in the heartland
            I looked in your eyes
            And I asked, "Are you ready?
            Ready for this life?"
            Did you see it coming?
            It happened so fast
            The timing was perfect
            Water on glass
            Like tracing figure eights on ice in skates
            Oh well
            And if this ice should break, it would be my
            My mistake
            Between the cities
            Between the thrills
            There's something inside you
            That doesn't sleep well
            It won't last forever
            Or maybe it will
            The white clothes they gave you
            You wear them so well
            Someone once told me
            In love, that you must
            Place all you're given
            In infinite trust
            Yet I'm tracing figure eights on ice in skates
            So well
            And if this ice should break, it would be my
            My mistake
        </Text>
        <Text style={Css.verMais} >Ver mais</Text>
        
        <TouchableOpacity
        //botao da  TAG
            activeOpacity={0.7}
           >
        </TouchableOpacity>

        <TouchableOpacity
         //botao da  TAG 
            activeOpacity={0.7}
            style={Css.tagPost}>
                <Text style={Css.txtTag} >TAG</Text>
        </TouchableOpacity>

        <Like_comentar_salvar/>


    
        </TouchableOpacity>
        </View>
    );
}