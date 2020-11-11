import React from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import AppHeader from '../components/AppHeader';
import PlusIcon from '../components/PlusIcon';

type RootStackParamList = {
  MemoList: undefined;
  NewMemo: undefined;
}

type Props = StackScreenProps<RootStackParamList, 'MemoList'>;

const MemoList = ({ route, navigation }: Props) => {
  return (
    <View>
      <AppHeader />
      <PlusIcon />
    </View>
  );
}

export default MemoList;
