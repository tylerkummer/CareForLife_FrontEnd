import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/Global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.push("Login");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Login" onPress={pressHandler} />
    </View>
  );
}
