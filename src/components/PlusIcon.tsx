import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  navigation: any
}

const PlusIcon: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.plusIcon}>
      <Button
        title=' add memo'
        type='outline'
        raised
        onPress={() => props.navigation.navigate('NewMemo')}
        icon={
          <Icon
            name="plus-circle"
            size={30}
            color='#0275d8'
          />
        }
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
