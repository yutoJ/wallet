import { Platform } from 'react-native';
import { createStackNavigator, TabNavigator } from 'react-navigation';
import ScreenHeader from './src/components/ScreenHeader';
import LoginScreen from './src/screens/LoginScreen';
import CardListScreen from './src/screens/CardListScreen';
import CardDetailScreen from './src/screens/CardDetailScreen';

import PaymentScreen from './src/screens/PaymentScreen';
import ChargeScreen from './src/screens/ChargeScreen';
import TransactionScreen from './src/screens/TransactionScreen';
import PointScreen from './src/screens/PointScreen';

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

const App = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: CardListScreen,
  },
  CardDetail: {
    screen: CardDetailScreen
  },
  Payment: {
    screen: PaymentScreen,
  },
  Charge: {
    screen: ChargeScreen,
  },
  Transaction: {
    screen: TransactionScreen,
  },
  Point: {
    screen: PointScreen,
  },
}, headerConfig);


export default App;

import ENV from './env.json';

const config = {
  apiKey:             ENV.FIREBASE_API_KEY,
  authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:        ENV.FIREBASE_DB_URL,
  projectId:          ENV.FIREBASE_PRJ_ID,
  storageBucket:      ENV.FIREBASE_STORAGE,
  messagingSenderId:  ENV.FIREBASE_SENDER_ID,
};
