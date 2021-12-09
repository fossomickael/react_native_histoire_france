import questionsAPI from "../apis/questions";
import { GET_ALL_CATEGORIES, GET_CATEGORY_QUESTIONS } from "./types";

export const getAllCategories = () => async (dispatch) => {
  try {
    const response = await questionsAPI.get("/category/all");

    dispatch({ type: GET_ALL_CATEGORIES, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

