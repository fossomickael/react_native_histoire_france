import { GET_ALL_CATEGORIES } from "../actions/types";

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.payload;

    default:
      return state;
  }
};

export default categoryReducer;
