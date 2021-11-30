import { SET_INDEX } from "../actions/types";

const questionIndexReducer = (state = 0, action) => {
  if (state === undefined) {
    return 0;
  }
  switch (action.type) {
    case SET_INDEX:
      return action.payload;
    default:
      return state;
  }
};

export default questionIndexReducer;
