import { START_TIMER, STOP_TIMER } from "./types";

export const startTimer = () => {
  return {
    type: START_TIMER,
    payload: { now: new Date().getTime() / 1000 },
  };
};

export const stopTimer = () => {
  return {
    type: STOP_TIMER,
    payload: true,
  };
};
