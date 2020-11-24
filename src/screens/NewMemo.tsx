import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { WebSQLDatabase } from 'expo-sqlite/src/SQLite.types';

const DB_NAME = 'memo-app';
const INSERT_DATA_SQL = `insert into ${DB_NAME} values (?, ?);`

const NewMemo: React.FC = () => {
  return (
    <View>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          multiline={true}
          numberOfLines={10}
          placeholder='Write Memo...'
          placeholderTextColor="gray"
        />
      </View>
      <Button
        title='+ add'
        raised
        onPress={() => { addMemo() }}
      ></Button>
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

const addMemo = () => {
  console.log('addMemo')
}

// Database
let db: WebSQLDatabase;

// Insert Data
const insert = (id:number, content: string) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        INSERT_DATA_SQL,
        [id, content],
        () => { console.log('insert data success.') },
        () => {
          console.log('insert data failed.')
          return false;
        }
      )
    },
  )
}

export default NewMemo;
