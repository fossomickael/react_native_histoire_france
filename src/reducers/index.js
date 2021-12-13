import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import questionIndexReducer from "./questionIndexReducer";
import resultatReducer from "./resultatReducer";
import categoryReducer from "./categoryReducer";
import questionTimerReducer from "./questionTimerReducer";
export default combineReducers({
  questions: questionsReducer,
  questionIndex: questionIndexReducer,
  resultat: resultatReducer,
  categories: categoryReducer,
  questionTimer: questionTimerReducer,
});
