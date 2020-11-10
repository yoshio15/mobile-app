import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MemoList from './screens/MemoList'

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MemoList' component={MemoList}/>
    </Stack.Navigator>
  );
}

export default RootStack;
