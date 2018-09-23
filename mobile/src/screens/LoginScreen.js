import React from 'react';
import {StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationActions, StackActions } from 'react-navigation';
import { Text, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


class LoginScreen extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  async componentDidMount() {
    const email = await Expo.SecureStore.getItemAsync('email');
    const password = await Expo.SecureStore.getItemAsync('password');
  }

  navigateToHome() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  handleSubmit() {
    this.navigateToHome();
  }

  render() {

    someFunction = () => {
      console.log('alright');
    }

    return (
      <View style={styles.container}>
        <Text h3 style={styles.title}>Login</Text>
        <FormLabel
          containerStyle={styles.inputText} >
          Name
        </FormLabel>
        <FormInput
          value={this.state.name}
          onChangeText={(text) => { this.setState({ name: text }); }}
          placeholder="Tom"
          onChangeText={someFunction}
          autoCorrect={false}
          containerStyle={styles.inputText}
        />
        <FormLabel
          containerStyle={styles.inputText} >
          Email
        </FormLabel>
        <FormInput
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          placeholder="Hanks"
          autoCorrect={false}
          onChangeText={someFunction}
          containerStyle={styles.inputText}
        />
        <FormLabel
          containerStyle={styles.inputText} >
          Password
        </FormLabel>
        <FormInput
          onChangeText={(text) => { this.setState({ password: text }); }}
          value={this.state.password}
          containerStyle={styles.inputText}
        />
        <Button
          title='LOGIN'
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
        />
    </View>
    )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    paddingTop: 40,
  },
});
