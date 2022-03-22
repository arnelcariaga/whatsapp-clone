import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConversationsScreenStack from "./components/Conversations/ConversationsScreenStack";
import ContactsScreenStack from "./components/Contacts/ContactsScreenStack";
import ChatScreenStack from "./components/Chat/ChatScreenStack";
import VerifyNumberScreenStack from "./components/VerifyNumber/VerifyNumberScreenStack";
import SetProfileScreenStack from "./components/SetProfile/SetProfileScreenStack";
import { Provider } from "react-redux";
import generateStore from "./components/redux/store";

const screensStackNavigator = createStackNavigator();

export default function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <screensStackNavigator.Navigator>
          <>
            <screensStackNavigator.Screen
              name="VerifyNumberScreenStack"
              component={VerifyNumberScreenStack}
              options={() => ({
                headerShown: false,
              })}
            />
            <screensStackNavigator.Screen
              name="SetProfileScreenStack"
              component={SetProfileScreenStack}
              options={() => ({
                headerShown: false,
              })}
            />
            <screensStackNavigator.Screen
              name="ConversationsScreenStack"
              component={ConversationsScreenStack}
              options={() => ({
                headerShown: false,
              })}
            />
            <screensStackNavigator.Screen
              name="ContactsScreenStack"
              component={ContactsScreenStack}
              options={() => ({
                headerShown: false,
              })}
            />
            <screensStackNavigator.Screen
              name="ChatScreenStack"
              component={ChatScreenStack}
              options={() => ({
                headerShown: false,
              })}
            />
          </>
        </screensStackNavigator.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
