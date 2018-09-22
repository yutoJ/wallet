import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';
import {
  Button,
  Card,
  Icon,
} from 'react-native-elements';

class CardDatailScreen extends React.Component {
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
            style={styles.image}
            source={require('../assets/card.jpg')}
          />
        </View>
        <View style = {{padding: 20}}>
          <View style = {styles.row}>
            <View style = {styles.info}>
              <Text style={{fontSize: 30}}>{this.state.balance}円</Text>
            </View>
            <View style = {styles.info}>
              <Text style={{fontSize: 30}}>{this.state.point}Pt</Text>
            </View>
          </View>
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
            ※入金の手数料は一律100円です
          </Text>
        </View>
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
  image: {
    width: Dimensions.get('window').width*9/10,
    height: Dimensions.get('window').width*4/7,
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'stretch'
  },
  message: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  info: {
    flex: 1,
    alignItems: 'center',
  },
  about: {
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  aboutText: {
    fontWeight: 'bold',
  },
  bookingBar: {
    position: 'absolute',
    bottom: 0,
    padding: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    backgroundColor: 'white',
    alignItems: 'center',
  }
});

export default CardDatailScreen;
