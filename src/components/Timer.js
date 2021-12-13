import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { startTimer, stopTimer } from "../actions/questionTimer";
class Timer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    if (new Date().getTime() / 1000 > this.props.expireTime) {
      this.props.stopTimer();
    }
  }

  render() {
    return (
      <View>
        <Text>
          {Math.round(this.props.expireTime - new Date().getTime() / 1000)}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    startTime: state.questionTimer.startTime,
    expireTime: state.questionTimer.expireTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      startTimer,
      stopTimer,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
