import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

class Question extends Component {
  componentDidMount = () => {};

  handleChoice = (is_right_answer) => {
    if (is_right_answer) {
      console.log("Bonne réponse!");
    }
  };
  render() {
    if (!this.props.question) {
      return <Text>Loading</Text>;
    }
    return (
      <View>
        <Text>{this.props.question.libelle}</Text>
        {this.props.question.choices.map((choice) => {
          return (
            <Button
              title={choice.libelle}
              onPress={() => this.handleChoice(choice.is_right_answer)}
            />
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("hello");
  return {
    question: state.questions[state.questionIndex],
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
