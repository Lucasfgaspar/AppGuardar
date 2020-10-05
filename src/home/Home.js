import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
        <Text>Objetivos</Text>           
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