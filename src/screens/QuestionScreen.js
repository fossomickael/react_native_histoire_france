import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { setRandomQuestions } from "../actions/questions";
import { setQuestionIndex } from "../actions/questionIndex";
import { useDispatch, useStore } from "react-redux";
import Question from "../components/Question";

const QuestionScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomQuestions());
    dispatch(setQuestionIndex(0));
  }, []);

  return (
    <View>
      <Question />
    </View>
  );
};

export default QuestionScreen;
