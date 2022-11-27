import react from "react";
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Css from "../../pages/css";
import Comentar from '../../img/iconComentar.png';
import Curtir from '../../img/iconCurtir.png';
import Salvar from '../../img/iconSalvar.png';
import { useNavigation } from '@react-navigation/native';

export default function Like_comentar_salvar ({onPressComentar, onPressCurtir, onPressSalvar, id}) {
    // const onPressComentar = () =>{
    //     navigation.navigate('Comentar')
    // }
    // const navigation = useNavigation();
    return(
        <View key={id} style={styles.row} >
        <TouchableOpacity onPress={onPressComentar}
        //botao comentar
            key={id}
            activeOpacity={0.7}
            style> 
             <Image source={Comentar} style={Css.iconComentar}/>
        </TouchableOpacity>
   
        <TouchableOpacity
        //botao curtir
            key={id}
            activeOpacity={0.7}
            >
            <Image source={Curtir} style={Css.iconCurtir}/>
        </TouchableOpacity>
        
        <TouchableOpacity
        //botao salvar
            key={id}
             activeOpacity={0.7}>
             <Image source={Salvar} style={Css.iconSalvar} />
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    row:{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginBottom: '8%',
            marginEnd: '3%',
            marginTop: '-8%'
    }
})