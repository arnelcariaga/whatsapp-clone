import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Conversations from "./Conversations";
import HeaderRight from "../Parts/Headers/HeaderRight";

const ConversationsScreenStackNavigator = createStackNavigator();
function ConversationsScreenStack() {
  return (
    <ConversationsScreenStackNavigator.Navigator>
      <ConversationsScreenStackNavigator.Screen
        name="WhatsApp"
        component={Conversations}
        options={({}) => ({
          headerRight: HeaderRight,
          headerStyle: {
            backgroundColor: "#008069",
            elevation: 0,
          },
          headerTintColor: "#fff",
        })}
      />
    </ConversationsScreenStackNavigator.Navigator>
  );
}
export default ConversationsScreenStack;
