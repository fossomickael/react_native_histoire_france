import { WRONG_ANSWER, RIGHT_ANSWER, RESET_RESULTAT } from "../actions/types";

const resultatReducer = (
  state = { wrongAnswers: 0, rightAnswers: 0 },
  action
) => {
  switch (action.type) {
    case WRONG_ANSWER:
      console.log(state.wrongAnswers);
      return { ...state, wrongAnswers: state.wrongAnswers + action.payload };
    case RIGHT_ANSWER:
      return { ...state, rightAnswers: state.rightAnswers + action.payload };
    case RESET_RESULTAT:
      return { wrongAnswers: 0, rightAnswers: 0 };
    default:
      return state;
  }
};

export default resultatReducer;
