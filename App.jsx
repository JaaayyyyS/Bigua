import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaRestaurantes from './src/view/screens/lista-restaurantes';
import Cardapio from './src/view/screens/cardapio';

import inicializar_database from './src/model/data/inicializar_database';
import Item from './src/view/screens/item';

const Stack = createNativeStackNavigator()

export default function App() {

  useEffect(() => {
    inicializar_database()
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='lista-restaurantes' component={ListaRestaurantes} options={{headerShown: false}}/>
        <Stack.Screen name='cardapio' component={Cardapio} options={{headerShown: false}}/>
        <Stack.Screen name='item' component={Item} options={{headerShown: false, animation: "slide_from_bottom"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}