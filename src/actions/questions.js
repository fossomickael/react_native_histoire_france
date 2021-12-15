import questionsAPI from "../apis/questions";
import { FETCH_RANDOM_QUESTIONS, GET_CATEGORY_QUESTIONS } from "./types";

export const setRandomQuestions = () => async (dispatch) => {
  try {
    const response = await questionsAPI.get("/random");
    dispatch({ type: FETCH_RANDOM_QUESTIONS, payload: response.data });
  } catch (err) {}
};

export const setCategoryQuestions = (category_id) => async (dispatch) => {
  try {
    const response = await questionsAPI.get(`/category/${category_id}`);
    dispatch({ type: GET_CATEGORY_QUESTIONS, payload: response.data });
  } catch (err) {}
};
