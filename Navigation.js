import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from "./pages/Fluxo de autenticação/Login";
import Cadastro from "./pages/Fluxo de autenticação/Cadastro";
import Preferencias from "./pages/Fluxo de autenticação/Preferencias";
import Routes from "./Routes";
import PostEmDDestaque from "./pages/FeedRelacionados/postEmDestaque";
import comentar from "./pages/FeedRelacionados/Comentar";
import TagSelection from "./pages/Postar/TagSelection";
import TagFolow from "./pages/FeedRelacionados/TagFolow";
import ForumMatematica from "./pages/Foruns/ForumMatematica";
import Salvos from './pages/Perfil relacionados/Salvos'
import configuracoes from './pages/Perfil relacionados/configucacoes'
import EditarPerfil from './pages/Perfil relacionados/EditarPerfil'
import ForumPortugues from "./pages/Foruns/ForumPortugues";
import ForumLiteratura from "./pages/Foruns/ForumLiteratura";
import ForumHistoria from "./pages/Foruns/ForumHistoria";
import ForumGeografia from "./pages/Foruns/ForumGeografia";
import ForumFilosofia from "./pages/Foruns/ForumFilosofia";
import ForumSociologia from "./pages/Foruns/ForumSociologia";
import ForumQuimica from "./pages/Foruns/ForumQuimica";
import ForumFisica from "./pages/Foruns/ForumFisica";
import ForumBiologia from "./pages/Foruns/ForumBiologia";
import ForumLinguas_Estrangeiras from "./pages/Foruns/ForumLinguas_Estrangeiras";

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
                <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: false}} >
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Cadastro" component={Cadastro}/>
                    <Stack.Screen name="Preferencias" component={Preferencias}/>
                    <Stack.Screen name="Routes" component={Routes}/>
                    <Stack.Screen name="PostEmDestaque" component={PostEmDDestaque}/>
                    <Stack.Screen name="Comentar" component={comentar}/>
                    <Stack.Screen name="TagSelect" component={TagSelection}/>
                    <Stack.Screen name="TagFolow" component={TagFolow}/>
                    <Stack.Screen name="ForumMatematica" component={ForumMatematica}/>
                    <Stack.Screen name="Configurações" component={configuracoes}/>
                    <Stack.Screen name="Salvos" component={Salvos}/>
                    <Stack.Screen name="EditarPerfil" component={EditarPerfil}/>
                    <Stack.Screen name="ForumPortugues" component={ForumPortugues}/>
                    <Stack.Screen name="ForumLiteratura" component={ForumLiteratura}/>
                    <Stack.Screen name="ForumHistoria" component={ForumHistoria}/>
                    <Stack.Screen name="ForumGeografia" component={ForumGeografia}/>
                    <Stack.Screen name="ForumFilosofia" component={ForumFilosofia}/>
                    <Stack.Screen name="ForumSociologia" component={ForumSociologia}/>
                    <Stack.Screen name="ForumQuimica" component={ForumQuimica}/>
                    <Stack.Screen name="ForumFisica" component={ForumFisica}/>
                    <Stack.Screen name="ForumBiologia" component={ForumBiologia}/>
                    <Stack.Screen name="ForumLinguas_Estrangeiras" component={ForumLinguas_Estrangeiras}/>
                </Stack.Navigator>
    );   
};