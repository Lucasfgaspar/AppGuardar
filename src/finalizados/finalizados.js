import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Finalizados() {
  return (
    <View style={styles.container}>
        <Text> Finalizados </Text>
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