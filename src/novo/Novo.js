import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Novo() {
  return (
    <View style={styles.container}>
        <Text> Novo Objetivo </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98FB98', 
    justifyContent: 'center',
    alignItems: 'center'  
  },
});