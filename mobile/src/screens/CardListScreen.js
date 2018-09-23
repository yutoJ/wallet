import React from 'react';
import {StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Button,
} from 'react-native-elements';
import CardList from '../components/CardList';
import { getCards } from '../actions/card';

class CardListScreen extends React.Component {
  state = {
    cards: [],
  }

  componentWillMount() {
    this.props.getCards();
  }

  render() {
    const { cards } = this.props;
    return (
      //const { cards } = this.props;
      <View style={styles.container}>
        <CardList cards={cards} navigation={this.props.navigation} />
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


const mapStateToProps = state => ({
  cards: state.card.cards
});

const mapDispatchToProps = dispatch => ({
  navigate: (route) => dispatch(navigate(route)),
  getCards: () => dispatch(getCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardListScreen);
