import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer, TabActions } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/home/Home';
import Novo from './src/novo/Novo';
import Finalizados from './src/finalizados/finalizados';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Objetivos' component={Home} />
        <Tab.Screen name='Novo' component={Novo}/>
        <Tab.Screen name='Finalizados' component={Finalizados}/>
      </Tab.Navigator>
    </NavigationContainer>           
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98FB98',   
  },
});
