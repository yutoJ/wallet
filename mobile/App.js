import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/configureStore';
import AppWithNavigationState from './src/AppNavigator';
import ENV from './env.json';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const config = {
  apiKey:             ENV.FIREBASE_API_KEY,
  authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:        ENV.FIREBASE_DB_URL,
  projectId:          ENV.FIREBASE_PRJ_ID,
  storageBucket:      ENV.FIREBASE_STORAGE,
  messagingSenderId:  ENV.FIREBASE_SENDER_ID,
};
