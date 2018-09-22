const tabConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#FF5A60',
    inactiveTintColor: '#3A3A3A',
    labelStyle: {
      fontSize: 10,
      fontWeight: 'bold'
    },
    tabStyle: {
      paddingBottom: 0,
      borderTopWidth: 1,
      borderTopColor: 'lightgray',
      backgroundColor: 'white'
    },
    style: {
      backgroundColor: 'white',
    },
  },
}

const TabNavi = TabNavigator({
  Explore: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: '探す'
    }
  },
  Profile: {
    screen: CardListScreen,
    navigationOptions: {
      tabBarLabel: 'あなた'
    }
  },
}, tabConfig);
