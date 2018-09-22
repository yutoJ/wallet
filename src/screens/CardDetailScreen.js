import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';
import {
  Button,
  Card,
  Icon,
} from 'react-native-elements';

class CardDetailScreen extends React.Component {
  state = {
    card: {},
    balance: 5000,
    point: 3000
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ card: params.card });
  }

  returnCard(card) {
  this.setState({ card });
}

  render() {
    const { card } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', padding: 20}}>
          <Image
            style={{ width: 350, height: 250}}
            source={require('../assets/card.jpg')}
          />
        </View>
        <View style={styles.middleBody}>
          <Text style={{fontSize: 30}}>
            Balance: {this.state.balance}円
          </Text>
          <Text style={{fontSize: 30}}>
            Point: {this.state.point}Pt
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <Icon
            raised
            name='shopping-cart'
            size={40}
            color='#00aced'
            onPress={() => { this.props.navigation.navigate('Payment') }} />
          <Icon
            raised
            name='payment'
            size={40}
            color='#00aced'
            onPress={() => { this.props.navigation.navigate('Charge') }} />
          <Icon
            raised
            name='list'
            size={40}
            color='#00aced'
            onPress={() => { this.props.navigation.navigate('Transaction') }} />
          <Icon
            raised
            name='control-point'
            size={40}
            color='#00aced'
            onPress={() => { this.props.navigation.navigate('Point') }} />
        </View>
        <View style={styles.message}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
        </View>

        <Button
          icon={{name: 'code'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFDF6'
  },
  middleBody: {
    flex: 1,
    backgroundColor: '#FFFF00'
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'stretch',
    paddingTop: 30
  },
  message: {
    flex: 1,
  }
});

export default CardDetailScreen;
