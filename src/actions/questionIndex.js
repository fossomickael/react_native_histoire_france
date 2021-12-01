import { RESET_INDEX, INCREMENT_INDEX } from "./types";

export const resetQuestionIndex = () => {
  return {
    type: RESET_INDEX,
    payload: 0,
  };
};

export const incrementQuestionIndex = () => {
  return {
    type: INCREMENT_INDEX,
    payload: 1,
  };
};
