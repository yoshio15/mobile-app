import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MemoList from './screens/MemoList'
import AppHeader from './components/AppHeader';
import PlusIcon from './components/PlusIcon';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MemoList' component={MemoList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
