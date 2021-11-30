import { SET_INDEX, INCREMENT_INDEX } from "./types";

export const setQuestionIndex = (value) => {
  return {
    type: SET_INDEX,
    payload: value,
  };
};

export const incrementQuestionIndex = () => {
  return {
    type: INCREMENT_INDEX,
    payload: 1,
  };
};
