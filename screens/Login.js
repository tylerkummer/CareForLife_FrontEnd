import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/Global";

export default function Login({ navigation }) {
  const pressHandler = () => {
    //navigation.goBack();
    navigation.navigate("FamilyList");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Login Screen</Text>
      <Button title="Family List" onPress={pressHandler} />
    </View>
  );
}
