import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppHeader from './components/AppHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <View style={styles.body}>
      <AppHeader />
      <View style={styles.plusIcon}>
        <Icon
          name="plus-circle"
          size={60}
          color='#00008b'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {},
  plusIcon: {
    margin: 15,
    alignItems: 'flex-end'
  }
});
