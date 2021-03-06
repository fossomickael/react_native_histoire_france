import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.welcome}>
      <Text style={styles.titre}>Quizz Histoire De France</Text>
      <Image
        style={styles.image}
        source={require("../assets/img/Louis_XIV.jpg")}
      />
      <TouchableOpacity
        style={styles.jouer}
        onPress={() => navigation.navigate("Question", { category_id: 0 })}
      >
        <Text style={styles.button}>Jouer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.jouer}
        onPress={() => navigation.navigate("Category")}
      >
        <Text style={styles.button}>Catégories</Text>
      </TouchableOpacity>
      <Text>Des nouvelles questions chaque semaine!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titre: {
    fontSize: 25,
    marginBottom: 20,
  },
  welcome: {
    alignItems: "center",
    marginTop: 20,
  },
  jouer: {
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#3282B8",
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    width: 200,
  },
  button: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 50,
    borderRadius: 3,
  },
});

export default WelcomeScreen;
