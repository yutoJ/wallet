import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Platform } from 'react-native';
import { createStackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import CardListScreen from './screens/CardListScreen';
import CardDetailScreen from './screens/CardDetailScreen';

import PaymentScreen from './screens/PaymentScreen';
import ChargeScreen from './screens/ChargeScreen';
import TransactionScreen from './screens/TransactionScreen';
import PointScreen from './screens/PointScreen';

const headerConfig = {
  navigationOptions: {
    headerTitle: 'NICE WALLeT',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#265366',
      ...Platform.select({
        android: {
          height: 80,
          paddingTop: 20,
        },
        ios: {
          height: 80,
          paddingTop: 20,
        },
      }),
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
}

export const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: CardListScreen },
  CardDetail: { screen: CardDetailScreen },
  Payment: { screen: PaymentScreen },
  Charge: { screen: ChargeScreen },
  Transaction: { screen: TransactionScreen },
  Point: { screen: PointScreen },
}, headerConfig);


class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const mapDispatchToProps = dispatch => ({
  dispatch: (action) => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);
