import { WRONG_ANSWER, RIGHT_ANSWER } from "./types";

export const wrongAnswer = () => {
  return {
    type: WRONG_ANSWER,
    payload: 1,
  };
};

export const rightAnswer = () => {
  return {
    type: RIGHT_ANSWER,
    payload: 1,
  };
};
