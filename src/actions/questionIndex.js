import { SET_INDEX } from "./types";

export const setQuestionIndex = (value) => {
  return {
    type: SET_INDEX,
    payload: value,
  };
};
