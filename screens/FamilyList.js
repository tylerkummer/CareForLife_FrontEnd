import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/Global";
import Card from "../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import AddFamilyForm from "./AddFamilyForm";

export default function FamilyList({ navigation }) {
  const pressHandler = () => {
    navigation.push("SurveyList");
  };

  const [modalOpen, setModalOpen] = useState(false);

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

  const addFamily = (family) => {
    family.key = Math.random().toString();
    setFamilies((currentFamilies) => {
      return [family, ...currentFamilies];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={styles.modalClose}
            onPress={() => setModalOpen(false)}
          />

          <AddFamilyForm addFamily={addFamily} />
        </View>
      </Modal>

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

      <Button title="Add Family" onPress={() => setModalOpen(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalClose: {
    margin: 10,
  },
  modalContent: {
    flex: 1,
  },
});
