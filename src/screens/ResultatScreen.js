import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useStore, useDispatch } from "react-redux";
import { incrementResult } from "../Utils/SaveData";
import { RESET_RESULTAT } from "../actions/types";

const ResultatScreen = ({ navigation }) => {
  const store = useStore();
  const state = store.getState();
  const dispatch = useDispatch();
  const rightAnswers = state.resultat.rightAnswers;
  const wrongAnswers = state.resultat.wrongAnswers;
  const totalAnswers = rightAnswers + wrongAnswers;
  incrementResult("wrongAnswers", wrongAnswers);
  incrementResult("rightAnswers", rightAnswers);
  dispatch({ type: RESET_RESULTAT });

  const percentage = Math.ceil((rightAnswers / totalAnswers) * 100);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Résultat</Text>
      <View style={styles.card_template}>
        <View styles={styles.resultat}>
          <Text style={styles.details}>Bonnes Réponses: {rightAnswers}</Text>
          <Text style={styles.details}>Mauvaises Réponses: {wrongAnswers}</Text>
          <Text style={styles.details}>Pourcentage: {percentage} %</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.retour}
        onPress={() => navigation.navigate("Bienvenue")}
      >
        <Text style={styles.button}>Retour accueil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    alignItems: "center",
  },
  details: {
    marginBottom: 10,
    color: "#BBE1FA",
    fontSize: 24,
  },
  card_template: {
    backgroundColor: "#0F4C75",
    borderRadius: 8,
    padding: 16,
  },
  resultat: {
    borderRadius: 4,
    backgroundColor: "#3282B8",
  },
  titleText: {
    fontSize: 48,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#1B262C",
    marginBottom: 16,
  },
  retour: {
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#3282B8",
    padding: 10,
    marginTop: 40,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
  },
});

export default ResultatScreen;
