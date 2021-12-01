import React from "react";
import { createPortal } from "react-dom";
import { View, Text } from "react-native";
import { useStore } from "react-redux";

const ResultatScreen = () => {
  const store = useStore();
  console.log("store");
  console.log(store.getState());
  return (
    <View>
      <Text>Resultat</Text>
    </View>
  );
};

export default ResultatScreen;
