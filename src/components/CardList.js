import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import {
  List,
  ListItem,
  Icon,
  SearchBar,
  Avatar,
} from 'react-native-elements';

export default class CardList extends Component {

  someMethod() {
    console.log('aa');
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder='Type Here...' />
        <List containerStyle={{marginBottom: 20}}>
            {
              this.props.cardList.map((item, index) => (
                <TouchableHighlight key={item.name} onPress={() => { this.props.navigation.navigate('CardDetail', { card: item }); }}>
                  <ListItem
                    key={item.name}
                    title={item.name}
                  />
                </TouchableHighlight>
              ))
            }
          </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});
