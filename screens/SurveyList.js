import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/Global";

export default function SurveyList({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>
        Survey Screen for {navigation.getParam("name")}
      </Text>
      <Button title="Previous Screen" onPress={pressHandler} />
    </View>
  );
}
