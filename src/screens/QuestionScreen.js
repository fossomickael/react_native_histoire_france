import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
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
    <View>
      <Question navigation={navigation} />
      <Timer />
    </View>
  );
};

export default QuestionScreen;
