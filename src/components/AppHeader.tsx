import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

const AppHeader = () => {
  return (
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'アプリ名', style: { color: '#fff' } }}
      ></Header>
  );
}

const styles = StyleSheet.create({});

export default AppHeader;
