import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = () => {
  return (
      <Header
        centerComponent={{ text: 'メモ帳', style: { color: '#fff' } }}
      ></Header>
  );
}

export default AppHeader;
