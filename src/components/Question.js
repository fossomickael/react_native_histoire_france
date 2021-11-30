import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { incrementQuestionIndex } from "../actions/questionIndex";
import ModalAnswered from "./ModalAnswered";
import Choice from "./Choice";
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { answered: false, to_display: "" };
  }

  handleChoice = (is_right_answer) => {
    if (is_right_answer) {
      this.setState({
        to_display: "Bonne réponse!",
        answered: true,
      });
    } else {
      this.setState({
        to_display: "Mauvaise réponse!",
        answered: true,
      });
    }
  };

  nextquestion = () => {
    this.props.incrementQuestionIndex();
    this.setState({
      answered: false,
    });
  };

  render() {
    if (!this.props.question) {
      return <Text>Loading</Text>;
    }
    return (
      <View>
        <ModalAnswered
          answered={this.state.answered}
          nextquestion={this.nextquestion}
          to_display={this.state.to_display}
        />
        <Text>{this.props.question.libelle}</Text>
        <View style={styles.choicesView}>
          {this.props.question.choices.map((choice) => {
            return (
              <Choice
                key={choice.id}
                title={choice.libelle}
                onPress={() => this.handleChoice(choice.is_right_answer)}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  choicesView: {},
});
const mapStateToProps = (state) => {
  return {
    question: state.questions[state.questionIndex],
    index: state.questionIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ incrementQuestionIndex }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
