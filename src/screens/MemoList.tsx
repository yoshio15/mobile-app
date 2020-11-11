import React from 'react';
import { View } from 'react-native';
import AppHeader from '../components/AppHeader';
import PlusIcon from '../components/PlusIcon';
import { MemoListProps } from '../types'

const MemoList: React.FC<MemoListProps> = ({ route, navigation }: MemoListProps) => {
  return (
    <View>
      <AppHeader />
      <PlusIcon navigation={navigation}></PlusIcon>
    </View>
  );
}

export default MemoList;
