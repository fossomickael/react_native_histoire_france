import React from "react";
import { View, Text, Button } from "react-native";

const QuestionScreen = () => {
  return (
    <View>
      <Text>Quelle est la date du Sacre de Napoléon Ier?</Text>
      <Button title="1804" />
      <Button title="1807" />
      <Button title="1809" />
      <Button title="1811" />
    </View>
  );
};

export default QuestionScreen;
