import { START_TIMER, STOP_TIMER } from "../actions/types";

const initialState = {
  startTime: undefined,
  expireTime: undefined,
  timeout: 30,
  timerEnded: false,
};

const questionTimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        startTime: action.payload.now,
        expireTime: action.payload.now + state.timeout,
        timerEnded: false,
      };

    case STOP_TIMER:
      return {
        ...state,
        timerEnded: action.payload,
      };

    default:
      return state;
  }
};

export default questionTimerReducer;
