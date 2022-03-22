import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VerifyNumber from "./SetProfile";
import Text from "react-native-paper/src/components/Typography/Text";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";

const VerifyNumberScreenStackNavigator = createStackNavigator();
function VerifyNumberScreenStack() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <VerifyNumberScreenStackNavigator.Navigator>
      <VerifyNumberScreenStackNavigator.Screen
        name="Select contact"
        component={VerifyNumber}
        options={({}) => ({
          headerRight: () => <Text>klk</Text>,
          headerTitle: () => (
            <>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Roboto_500Medium",
                }}
              >
                Set profile
              </Text>
            </>
          ),
          headerStyle: {
            elevation: 0,
          },
        })}
      />
    </VerifyNumberScreenStackNavigator.Navigator>
  );
}
export default VerifyNumberScreenStack;
