import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import AppHeader from '../components/AppHeader';
import PlusIcon from '../components/PlusIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type RootStackParamList = {
  MemoList: undefined;
  NewMemo: undefined;
}

type Props = StackScreenProps<RootStackParamList, 'MemoList'>;


const styles = StyleSheet.create({
  plusIcon: {
    margin: 15,
    alignItems: 'flex-end'
  }
});

const MemoList = ({ route, navigation }: Props) => {
  return (
    <View>
      <AppHeader />
      <View style={styles.plusIcon}>
        <Icon
          name="plus-circle"
          size={60}
          color='#00008b'
          onPress={() => navigation.navigate('NewMemo')}
        />
      </View>
    </View>
  );
}

export default MemoList;
