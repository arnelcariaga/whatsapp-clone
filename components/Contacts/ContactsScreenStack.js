import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./Contacts";
import Text from "react-native-paper/src/components/Typography/Text";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import HeaderRight from "../Parts/Headers/HeaderRight";

const ContactsScreenStackNavigator = createStackNavigator();
function ContactcScreenStack() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ContactsScreenStackNavigator.Navigator>
      <ContactsScreenStackNavigator.Screen
        name="Select contact"
        component={Contacts}
        options={({}) => ({
          headerRight: HeaderRight,
          headerTitle: () => (
            <>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontFamily: "Roboto_500Medium",
                }}
              >
                Select contact
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 13,
                }}
              >
                321 contacts
              </Text>
            </>
          ),
          headerStyle: {
            backgroundColor: "#008069",
            elevation: 0,
          },
          headerTintColor: "#fff",
        })}
      />
    </ContactsScreenStackNavigator.Navigator>
  );
}
export default ContactcScreenStack;
