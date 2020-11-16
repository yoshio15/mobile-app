import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as SQLite from 'expo-sqlite';
import { WebSQLDatabase } from 'expo-sqlite/src/SQLite.types';

import PlusIcon from '../components/PlusIcon';
import { MemoListProps } from '../types';

// constants
const DB_NAME = 'memo-app';

// SQL
const CREATE_DB_SQL = 'create table if not exists memos (memo_id integer primary key not null, content text);'
const SELECT_ALL_SQL = 'select * from memos;'
const INSERT_DATA_SQL = `insert into ${DB_NAME} values (?, ?);`

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

const MemoList: React.FC<MemoListProps> = ({ _route, navigation }: MemoListProps) => {

  useEffect(() => {
    db = SQLite.openDatabase(DB_NAME);
    console.log(db);
    db.transaction(
      // callback
      (tx) => {
        tx.executeSql(
          CREATE_DB_SQL,
          null,
          db.transaction(
            // callback
            (tx) => {
              tx.executeSql(
                SELECT_ALL_SQL,
                null,
                (_, { rows: {_array} }) => {
                  console.log('SELECT_ALL')
                  console.log('array: ' + _array)
                }
              )
            },
            // error
            () => { console.log('fail') },
            // succuess
            () => { console.log('success') }
          ),
          () => { console.log('fail') }
        )
      },
      // error
      () => { console.log('fail') },
      // succuess
      () => { console.log('success') }
    )
  });

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
