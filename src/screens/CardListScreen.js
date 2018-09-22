import React from 'react';
import {StyleSheet, View } from 'react-native';
import {
  Button,
} from 'react-native-elements';
import CardList from '../components/CardList';
//import CircleButton from '../elements/CircleButton';

class CardListScreen extends React.Component {
  state = {
    cardList: [
      {
        key: '1',
        type: 'Prepaid',
        name: 'Coffee Cups'
      },
      {
        key: '2',
        type: 'Prepaid',
        name: 'Morimori Gym'
      }
    ],
  }

  render() {
    return (
      <View style={styles.container}>
        <CardList cardList={this.state.cardList} navigation={this.props.navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
  },
  button: {
    paddingTop: 40,
  },
});

export default CardListScreen;
