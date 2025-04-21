// Navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Calculadora from './Screens/Calculadora';  // La pantalla principal
import PruebaConext from './Screens/PruebaContext';  // La pantalla a la que quieres navegar
import { BackendProvider } from './Context/BackendContext';
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <BackendProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Calculadora} />
        <Stack.Screen name="PruebaConext" component={PruebaConext} />
      </Stack.Navigator>
    </NavigationContainer>
    </BackendProvider>
  );
}
