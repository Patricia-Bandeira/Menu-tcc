import {NavigationContainer} from '@react-navigation/native';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Login from './pages/login';


import Routes from './Routes';

export default function App() {
  return (
        <NavigationContainer>
             {/* <Routes/> */}
             <Login/>
        </NavigationContainer>
  );
}

