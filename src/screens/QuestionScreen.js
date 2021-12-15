import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { setRandomQuestions, setCategoryQuestions } from "../actions/questions";
import { useDispatch, useStore } from "react-redux";
import Question from "../components/Question";
import Timer from "../components/Timer";
const QuestionScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { category_id } = route.params;

  useEffect(() => {
    if (category_id === 0) {
      dispatch(setRandomQuestions());
    } else {
      dispatch(setCategoryQuestions(category_id));
    }
  }, []);

  return (
    <View style={styles.container}>
      <Timer />
      <Question navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 20,
    alignItems: "center",
  },
});
export default QuestionScreen;
