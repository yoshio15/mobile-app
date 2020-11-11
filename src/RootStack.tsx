import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types'
import MemoList from './screens/MemoList'
import NewMemo from './screens/NewMemo'

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MemoList' component={MemoList}/>
      <Stack.Screen name='NewMemo' component={NewMemo}/>
    </Stack.Navigator>
  );
}

export default RootStack;
