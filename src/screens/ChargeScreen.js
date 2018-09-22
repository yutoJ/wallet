import React from 'react';
import {StyleSheet, View } from 'react-native';
import { Text, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


class ChargeScreen extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>ChargeScreen</Text>
    </View>
    )
  }
}

export default ChargeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
  }
});
