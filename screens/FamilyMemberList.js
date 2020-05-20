import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/Global";

export default function FamilyMemberList({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>
        Family Member Screen for {navigation.getParam("name")}
      </Text>
      <Button title="Previous Screen" onPress={pressHandler} />
    </View>
  );
}
