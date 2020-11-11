import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  navigation: any
}

const PlusIcon = (props: Props) => {
  return (
    <View style={styles.plusIcon}>
      <Icon
        name="plus-circle"
        size={60}
        color='#00008b'
        onPress={() => props.navigation.navigate('NewMemo')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  plusIcon: {
    margin: 15,
    alignItems: 'flex-end'
  }
});

export default PlusIcon;
