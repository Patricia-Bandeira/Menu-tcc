import {Text, View, Image} from 'react-native';
import Css from '../pages/css';
import userIcon from '../img/userBase.png';

    
export default function Container_notificacao (){
    return (
        <View style={Css.card} >
            <View style={Css.miniPerfilView}>
                <Image
                style={Css.miniPerfil}
                source={userIcon}
                />
            </View>

            <Text style ={Css.nomeDeUsuario} >
                @Usuario123
            </Text>
            
            <Text style ={Css.corponotifiacao}>
            Curtiu sua postagem
            </Text>
        </View>
    );
};

;

 
