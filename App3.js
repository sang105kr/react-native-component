import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Beomjun';
  return (
    <View style={styles.container}>
      {name === 'Beomjun' && (
        <Text style={styles.text}>My name is Beomjun</Text>
      )}
      {name === 'Beomjun' || (
        <Text style={styles.text}>My name is not Beomjun</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#00f',
  },
});
