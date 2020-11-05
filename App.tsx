import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.body}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'フットサルナビ', style: { color: '#fff' } }}
      ></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {},
});
