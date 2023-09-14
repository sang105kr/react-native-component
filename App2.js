import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Hanbit';
  return (
    <View style={styles.container}>
      <Text>
        {/* {(() => {
          if (name === 'Hanbit') return 'My name is Hanbit';
          else if (name === 'Beomjun') return 'My name is Beomjun';
          else return 'My name is React Native';
        })()} */}
        My name is{' '}
        {name === 'Beomjun'
          ? 'Beomjun'
          : name === 'Hanbit'
          ? 'Hanbit'
          : 'React Native'}
      </Text>
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
});
