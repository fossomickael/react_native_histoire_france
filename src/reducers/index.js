import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import questionIndexReducer from "./questionIndexReducer";
import resultatReducer from "./resultatReducer";
export default combineReducers({
  questions: questionsReducer,
  questionIndex: questionIndexReducer,
  resultat: resultatReducer,
});
