import questionsAPI from "../apis/questions";
import { FETCH_RANDOM_QUESTIONS, SET_INDEX } from "./types";

export const setRandomQuestions = () => async (dispatch) => {
  const response = await questionsAPI.get("/random");

  dispatch({ type: FETCH_RANDOM_QUESTIONS, payload: response.data });
};
