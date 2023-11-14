import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaRestaurantes from './src/screens/lista-restaurantes';
import Cardapio from './src/screens/cardapio';
import Item from './src/screens/item';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='lista-restaurantes' component={ListaRestaurantes} options={{headerShown: false}}/>
        <Stack.Screen name='cardapio' component={Cardapio} options={{headerShown: false}}/>
        <Stack.Screen name='item' component={Item} options={{headerShown: false, animation: 'slide_from_bottom'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}