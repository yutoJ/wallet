import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class Functions extends React.Component {

  render() {
    return (
      <View>
        <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
        />

        <Icon
          reverse
          name='ios-american-football'
          type='ionicon'
          color='#517fa4'
        />
      </View>
    )
  }
}

export default Functions;
