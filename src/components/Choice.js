import React from "react";
import { Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const Choice = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.choice} onPress={() => onPress()}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  choice: {
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#3282B8",
    padding: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
  },
  button: {
    color: "#FFFFFF",
  },
});
export default Choice;
