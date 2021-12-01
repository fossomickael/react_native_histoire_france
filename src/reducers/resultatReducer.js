import { WRONG_ANSWER, RIGHT_ANSWER } from "../actions/types";

const resultatReducer = (
  state = { right_answer: 0, wrong_answer: 0 },
  action
) => {
  switch (action.type) {
    case WRONG_ANSWER:
      return { ...state, wrongAnswers: state.wrongAnswers + action.payload };
    case RIGHT_ANSWER:
      return { ...state, rightAnswers: state.rightAnswers + action.payload };
    default:
      return state;
  }
};

export default resultatReducer;
