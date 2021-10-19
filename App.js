import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Termns from "./components/Terms/terms";

const screensStackNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <screensStackNavigator.Navigator>
        <React.Fragment>
          <screensStackNavigator.Screen
            name="Terms"
            component={Termns}
            options={() => ({
              headerShown: false,
            })}
          />
        </React.Fragment>
      </screensStackNavigator.Navigator>
    </NavigationContainer>
  );
}
