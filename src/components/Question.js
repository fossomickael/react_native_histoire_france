import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { incrementQuestionIndex } from "../actions/questionIndex";
import { setRandomQuestions } from "../actions/questions";
import { resetQuestionIndex } from "../actions/questionIndex";
import { wrongAnswer, rightAnswer } from "../actions/resultatIndex";
import { startTimer, stopTimer } from "../actions/questionTimer";
import sendAnswer from "../Utils/SendAnswer";
import ModalAnswered from "./ModalAnswered";
import Choice from "./Choice";
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { answered: false, to_display: "" };
  }

  componentDidMount = () => {
    if (this.props.question === undefined) {
      this.props.setRandomQuestions();
    }

    if (this.props.question) {
      this.props.startTimer();
    }
  };

  componentDidUpdate(prevProps) {
    // Utilisation classique (pensez bien à comparer les props) :
    if (this.props.question && prevProps.question === undefined) {
      this.props.startTimer();
    }
  }

  handleChoice = (choice) => {
    const timeToAnswer = new Date().getTime() / 1000 - this.props.startTime;
    sendAnswer(choice.id, timeToAnswer);
    this.props.stopTimer();
    if (choice.is_right_answer) {
      this.setState({
        to_display: "Bonne réponse!",
        answered: true,
      });
      this.props.rightAnswer();
    } else {
      this.setState({
        to_display: "Mauvaise réponse!",
        answered: true,
      });

      this.props.wrongAnswer();
    }
  };

  nextquestion = () => {
    if (this.props.numberofquestions === this.props.questionIndex + 1) {
      this.props.resetQuestionIndex();
      this.props.stopTimer();
      this.props.navigation.navigate("Resultat");
    } else {
      this.setState({
        answered: false,
      });
      this.props.startTimer();
      this.props.incrementQuestionIndex();
    }
  };

  render() {
    if (this.props.question === undefined) {
      return <Text>Chargement</Text>;
    }
    return (
      <View>
        <ModalAnswered
          answered={this.state.answered}
          timerEnded={this.props.timerEnded}
          nextquestion={this.nextquestion}
          to_display={this.state.to_display}
          explication={this.props.question.explication}
        />
        <Text style={styles.libelle}>{this.props.question.libelle}</Text>
        <View style={styles.choicesView}>
          {this.props.question.choices.map((choice) => {
            return (
              <Choice
                key={choice.id}
                title={choice.libelle}
                onPress={() => this.handleChoice(choice)}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  choicesView: {
    alignItems: "center",
  },
  to_display: {
    color: "#DEE1EC",
  },
  libelle: {
    color: "#1B262C",
    marginBottom: 30,
    textAlign: "center",
    fontSize: 24,
    marginTop: 100,
    fontFamily: "Roboto",
    fontWeight: "bold",
    margin: 20,
  },
});
const mapStateToProps = (state) => {
  return {
    question: state.questions[state.questionIndex],
    numberofquestions: state.questions.length,
    questionIndex: state.questionIndex,
    timerEnded: state.questionTimer.timerEnded,
    startTime: state.questionTimer.startTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      incrementQuestionIndex,
      setRandomQuestions,
      resetQuestionIndex,
      wrongAnswer,
      rightAnswer,
      startTimer,
      stopTimer,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
