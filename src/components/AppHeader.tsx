import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = () => {
  return (
      <Header
        centerComponent={{ text: 'アプリ名', style: { color: '#fff' } }}
      ></Header>
  );
}

export default AppHeader;
