import { WRONG_ANSWER, RIGHT_ANSWER, RESET_RESULTAT } from "./types";

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

export const resetResultat = () => {
  return {
    type: RESET_RESULTAT,
    payload: 0,
  };
};
