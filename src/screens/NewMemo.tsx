import React, { useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite';

const NewMemo: React.FC = () => {
  useEffect(() => {
    console.log('useEffect')
    const DB_NAME = 'memo-app';
    const db = SQLite.openDatabase(DB_NAME);
    console.log(db);
  });
  return (
    <View style={styles.textAreaContainer}>
      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={10}
        placeholder='Write Memo...'
        placeholderTextColor="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 4,
    padding: 10
  },
  textArea: {
    height: 400,
    justifyContent: "flex-start"
  }
});

export default NewMemo;
