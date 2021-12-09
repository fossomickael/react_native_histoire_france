import {
  FETCH_RANDOM_QUESTIONS,
  GET_CATEGORY_QUESTIONS,
} from "../actions/types";

const questionsReducer = (state = [], action) => {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case FETCH_RANDOM_QUESTIONS:
      return action.payload;
    case GET_CATEGORY_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
};

export default questionsReducer;
