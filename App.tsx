import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Header } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>

      <Text>
        Hello World!!
      </Text><Button
          large
          backgroundColor='#009688'
          icon={{name:'android'}}
          title='Hello!'
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
