import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import PlusIcon from '../components/PlusIcon';
import { MemoListProps } from '../types'

const MemoList: React.FC<MemoListProps> = ({ _route, navigation }: MemoListProps) => {
  return (
    <View>
      <PlusIcon navigation={navigation}></PlusIcon>
      <Card>
        <Card.Title>2020年11月12日</Card.Title>
        <Text>memo content</Text>
      </Card>
    </View>
  );
}

export default MemoList;
