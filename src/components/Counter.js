import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MyButton from './MyButton';

const Counter = () => {
  //state : 컴포넌트 내부에서 생성되고 값을 변경하여 컴포넌트 상태를 관리
  //        state변수가 값이 갱신되면 리렌더링됨.
  //        state변수의 생성은 useState함수 사용
  //        state변수의 수정은 useState함수를 통해 만들어진 setter함수를 통해 수정
  const [count, setCount] = useState(0); // state변수 생성
  const [double, setDouble] = useState(0); // state변수 생성

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 30, margin: 10 }}>{`count:${count}`}</Text>
      <Text style={{ fontSize: 30, margin: 10 }}>{`double:${double}`}</Text>
      <MyButton
        title="+1"
        onPress={() => {
          setCount(count + 1); // count = count + 1 (X);
          setDouble(double + 2);
        }}
      />
      <MyButton
        title="-1"
        onPress={() => {
          setCount(count - 1);
          setDouble(double - 2);
        }}
      />
    </View>
  );
};

export default Counter;
