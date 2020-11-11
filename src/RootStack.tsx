import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MemoList from './screens/MemoList'
import NewMemo from './screens/NewMemo'

type RootStackParamList = {
  MemoList: undefined;
  NewMemo: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MemoList' component={MemoList}/>
      <Stack.Screen name='NewMemo' component={NewMemo}/>
    </Stack.Navigator>
  );
}

export default RootStack;
