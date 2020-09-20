import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home/home';
import Novo from './novo/novo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Objetivos" component={Home}/>
        <Stack.Screen name="Novo Objetivo" component={Novo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98FB98',   
  },
});
