import { SET_INDEX, INCREMENT_INDEX } from "../actions/types";

const questionIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_INDEX:
      return action.payload;
    case INCREMENT_INDEX:
      return state + action.payload;
    default:
      return state;
  }
};

export default questionIndexReducer;
