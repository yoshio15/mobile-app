import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

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

export default NewMemo;
