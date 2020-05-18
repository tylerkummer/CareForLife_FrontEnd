import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Login from "../screens/Login";
import FamilyList from "../screens/FamilyList";
import SurveyList from "../screens/SurveyList";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Care For Life",
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login Screen",
    },
  },
  FamilyList: {
    screen: FamilyList,
    navigationOptions: {
      title: "Family List Screen",
    },
  },
  SurveyList: {
    screen: SurveyList,
    navigationOptions: {
      title: "Survey List Screen",
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 },
  },
});

export default createAppContainer(HomeStack);
