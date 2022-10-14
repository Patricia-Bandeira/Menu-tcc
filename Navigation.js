import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Preferencias from "./pages/Preferencias";
import Routes from "./Routes";
import PostEmDDestaque from "./pages/postEmDestaque";

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Cadastro" component={Cadastro}/>
                    <Stack.Screen name="Preferencias" component={Preferencias}/>
                    <Stack.Screen name="Routes" component={Routes}/>
                    <Stack.Screen name="PostEmDestaque" component={PostEmDDestaque}/>
                </Stack.Navigator>
    );   
};