import React from "react";
import { View, Text,} from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
            // <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Cadastro" component={Cadastro}/>
                    <Stack.Screen name="Home" component={Home}/>
                </Stack.Navigator>
            // {/* </NavigationContainer> */}
    );   
};