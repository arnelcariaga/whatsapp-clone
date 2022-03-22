import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "./Chat";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import HeaderChat from "../Parts/Headers/HeaderChat";

const ChatScreenStackNavigator = createStackNavigator();
function ContactcScreenStack(props) {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ChatScreenStackNavigator.Navigator>
      <ChatScreenStackNavigator.Screen
        name="FullName"
        children={() => <Chat {...props} />}
        options={() => ({
          header: () => <HeaderChat {...props} />,
        })}
      />
    </ChatScreenStackNavigator.Navigator>
  );
}
export default ContactcScreenStack;
