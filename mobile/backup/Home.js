import React from 'react';
import { Button, TouchableOpacity, Image } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <Button
        title="go Detail Screen"
        onPress={() => this.props.navigation.navigate("DetailScreen")}
      />
    );
  }
}
