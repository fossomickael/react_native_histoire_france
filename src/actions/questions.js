import questionsAPI from "../apis/questions";
import { FETCH_RANDOM_QUESTIONS, SET_INDEX } from "./types";

export const setRandomQuestions = () => async (dispatch) => {
  try {
    const response = await questionsAPI.get("/all");

    dispatch({ type: FETCH_RANDOM_QUESTIONS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
