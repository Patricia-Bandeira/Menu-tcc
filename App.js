import {NavigationContainer} from '@react-navigation/native';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Navigation from './Navigation';

import Routes from './Routes';

export default function App() {
  return (
      <NavigationContainer>
          <Navigation/>
             {/* <Routes/> */}
             {/* <Cadastro/> */}
      </NavigationContainer>
  );
}

