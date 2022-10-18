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
                </Stack.Navigator>
    );   
};