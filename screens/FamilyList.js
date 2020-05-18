import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/Global";
import Card from "../components/Card";

export default function FamilyList({ navigation }) {
  const pressHandler = () => {
    navigation.push("SurveyList");
  };

  const [families, setFamilies] = useState([
    {
      name: "Family_1",
      key: "1",
    },
    {
      name: "Family_2",
      key: "2",
    },
    {
      name: "Family_3",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Family List Screen</Text>
      <FlatList
        data={families}
        //keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.push("SurveyList", item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.name}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />

      <Button title="Add Family" onPress={pressHandler} />
    </View>
  );
}
