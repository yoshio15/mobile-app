import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as SQLite from 'expo-sqlite';

import PlusIcon from '../components/PlusIcon';
import { MemoListProps } from '../types';

// constants
const DB_NAME = 'memo-app';
const CREATE_DB_SQL = 'create table if not exists memos (memo_id integer primary key not null, content text);'
const SELECT_ALL_SQL = 'select * from memos';

const MemoList: React.FC<MemoListProps> = ({ _route, navigation }: MemoListProps) => {

  useEffect(() => {
    const db = SQLite.openDatabase(DB_NAME);
    console.log(db);
    db.transaction(
      // callback
      (tx) => {
        tx.executeSql(
          CREATE_DB_SQL,
          null,
          () => { console.log('success') },
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
