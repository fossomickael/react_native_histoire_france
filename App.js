import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import QuestionScreen from "./src/screens/QuestionScreen";
import ResultatScreen from "./src/screens/ResultatScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import thunk from "redux-thunk";
import { SafeAreaProvider } from "react-native-safe-area-context";

const initialState = {
  questions: [],
  questionIndex: 0,
  resultat: { rightAnswers: 0, wrongAnswers: 0 },
};
const middlewares = applyMiddleware(thunk);
const store = createStore(reducers, initialState, middlewares);
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Bienvenue"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question"
              component={QuestionScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Resultat"
              component={ResultatScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Category"
              component={CategoryScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
