import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Restaurantes from './src/screens/lista-restaurantes';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Restaurantes} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}