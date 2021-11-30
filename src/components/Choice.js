import React from "react";
import { Button, StyleSheet, View } from "react-native";

const Choice = ({ title, onPress }) => {
  return (
    <View style={styles.choice}>
      <Button style={styles.button} title={title} onPress={() => onPress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  choice: {
    borderRadius: 6,
    width: "80%",
    marginBottom: 15,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 80, // no matter what value I set here, their width doesn't changes
    height: 20,
  },
});
export default Choice;
