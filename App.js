import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import QuestionScreen from "./src/screens/QuestionScreen";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import thunk from "redux-thunk";

const initialState = {
  questions: [],
};
const middlewares = applyMiddleware(thunk);
const store = createStore(reducers, initialState, middlewares);
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Question" component={QuestionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
