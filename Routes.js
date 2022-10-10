import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 

import Home from './pages/Home'; 
import Pesquisa from './pages/Pesquisa'; 
import Postagem from './pages/Postagem';
import Notificacao from './pages/Notificacao';
import Perfil from './pages/Perfil';

import {Feather} from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
export default function Routes() {
  return (
    <Tab.Navigator
    screenOptions={{            
     tabBarActiveTintColor:"white",
     tabBarInactiveTintColor:'#444456',
     tabBarShowLabel:false,
     tabBarActiveBackgroundColor:'#25252B',
     tabBarInactiveBackgroundColor:'#25252B',
     tabBArStyle:[
      {
        width: 100,
        display:'flex'
      }
     ] 
}}
>
          
     <Tab.Screen
            name="Home" 
            component={Home}
            options={{
              headerShown:false,
              tabBarIcon:({size,color}) => (
                <Feather name="home" size={size} color={color} />
              )
            }}/>


            <Tab.Screen 
            name="Pesquisa" 
            component={Pesquisa}
            options={{
              headerShown:false,
              tabBarIcon:({size,color}) => (
                <Feather name="search" size={size} color={color} />
               )
            }}/>

            <Tab.Screen 
            name= "Postagem"
            component={Postagem}
            options={{
              headerShown:false,
              tabBarIcon:({size,color}) => (
                <Feather name="plus-circle" size={size} color={color} />
               )
            }}/>

            <Tab.Screen 
            name="Notificacao" 
            component={Notificacao}
            options={{
              headerShown:false,
              tabBarIcon:({size,color}) => (
                <Feather name="star" size={size} color={color} />
               )
            }}/>

           <Tab.Screen 
            name= "Perfil"
            component={Perfil}
            options={{
              headerShown:false,
              tabBarIcon:({size,color}) => (
                <Feather name="user" size={size} color={color} />
               )
            }}/>



          </Tab.Navigator>
  );
}
