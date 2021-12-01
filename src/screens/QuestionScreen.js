import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { setRandomQuestions } from "../actions/questions";
import { useDispatch, useStore } from "react-redux";
import Question from "../components/Question";

const QuestionScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomQuestions());
  }, []);

  return (
    <View>
      <Question navigation={navigation} />
    </View>
  );
};

export default QuestionScreen;
