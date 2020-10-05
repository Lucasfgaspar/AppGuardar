import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';


export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>           
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98FB98',   
  },
});
