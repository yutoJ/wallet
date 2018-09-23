import Tab from './Tab';
import Detail from './Detail';
import { createDrawerNavigator } from 'react-navigation';

export default createDrawerNavigator({
  DrawerItem1: {
      screen: Tab,
      navigationOptions: {
          drawerLabel: "Drawer Item 1"
      },
  },
  DrawerItem2: {
      screen: Detail,
      navigationOptions: {
          drawerLabel: "Drawer Item 2"
      },
  }
});
