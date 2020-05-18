import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Header from "../components/Header";
import Home from "../screens/Home";
import Login from "../screens/Login";
import FamilyList from "../screens/FamilyList";
import SurveyList from "../screens/SurveyList";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: () => <Header title="Care For Life" />,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: () => <Header title="Login Screen" />,
    },
  },
  FamilyList: {
    screen: FamilyList,
    navigationOptions: {
      headerTitle: () => <Header title="Family List Screen" />,
    },
  },
  SurveyList: {
    screen: SurveyList,
    navigationOptions: {
      headerTitle: () => <Header title="Survey List Screen" />,
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 },
  },
});

const styles = StyleSheet.create({
  headerFix: {
    color: "red",
  },
});

export default createAppContainer(HomeStack);
