import React from 'react';
import {
  Header
} from 'react-native-elements'

class ScreenHeader extends React.Component {

  render() {
    return (
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Cards', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    )
  }
}

export default ScreenHeader;
