import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppHeader from './components/AppHeader';

export default function App() {
  return (
    <View style={styles.body}>
      <AppHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {},
});
