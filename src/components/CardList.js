import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';

import {
  Icon,
  SearchBar,
} from 'react-native-elements';

export default class CardPlusList extends Component {

  someMethod() {
    console.log('aa');
  }

  render() {
    const { cardList } = this.props;
    console.log(cardList);
    return (
      <View style = {styles.container}>
        <SearchBar
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder='Type Here...' />
        <FlatList
          style={styles.list}
          data={cardList}
          renderItem={({item}) =>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CardDetail', { card: item }); }} style={styles.item}>
              <Image style={styles.image} source= {require('../assets/card.jpg')} />
              <Text>{item.name}</Text>
              <Text>{`${item.type}`}</Text>
            </TouchableOpacity>
          }
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 20,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
  },
  image: {
    width: Dimensions.get('window').width - 80,
    height: Dimensions.get('window').width *4/7,
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
});
