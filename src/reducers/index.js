import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import questionIndexReducer from "./questionIndexReducer";
export default combineReducers({
  questions: questionsReducer,
  questionIndex: questionIndexReducer,
});
