import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import PlusIcon from '../components/PlusIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList, MemoListProps } from '../types'



const styles = StyleSheet.create({
  plusIcon: {
    margin: 15,
    alignItems: 'flex-end'
  }
});

const MemoList = ({ route, navigation }: MemoListProps) => {
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
