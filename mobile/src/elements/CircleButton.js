import React from 'react';
import { Font } from 'expo';

import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  handlePress() {
    console.log('hoge');
  }

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.handlePress.bind(this)} underlayColor="transparent">
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  circleButton: {
    width: 48,
    height: 48,
    margin: 8,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24,
  },
});

export default CircleButton;
