import React from 'react';
import { Text, View } from 'react-native';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import EventButton from './components/EventButton';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
        }}
      >
        Button Component
      </Text>
      <MyButton title="버튼1" onPress={() => alert('hi1')} />
      <MyButton title="버튼2" onPress={() => alert('hi2')} />
      <MyButton title="버튼3" onPress={() => alert('hi3')} />
      <Counter />
      <EventButton/>
    </View>
  );
};

export default App;
