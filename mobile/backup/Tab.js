import { createBottomTabNavigator } from "react-navigation-tabs";
import Main from "./Main";

export default createBottomTabNavigator({
  TabItem1: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: "Tab Item"
    }
  }
});
