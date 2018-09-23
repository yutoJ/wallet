import React from 'react';
import { Button, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Detail from './Detail';
import Home from './Home';

export default createStackNavigator({
  MainScreen: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('./hamburger_icon.png')}
            style={{ width: 30, height: 30}}
          />
        </TouchableOpacity>
      )
    })
  },
  DetailScreen: {
    screen: Detail,
    navigationOptions: ({
      header: null
    })
  }
});
