import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fabbuton from '../src/componentes/Fabbuton';

export default function Novo() {
  return (
    <View style={styles.container}>
        <Text>Novo Objetivo</Text>
      <Fabbuton 
        style={{ bottom: 80, right: 60}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98FB98',   
  },
});