import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PlusIcon = () => {
  return (
    <View style={styles.plusIcon}>
      <Icon
        name="plus-circle"
        size={60}
        color='#00008b'
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
