import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Text from "react-native-paper/src/components/Typography/Text";
import TabBar from "./TabBar";
import ConversationsList from "./../Conversations/ConversationsList";

const Tab = createMaterialTopTabNavigator();

const Camera = () => <Text>CAMERRA</Text>;
const Status = () => <Text>STATUS</Text>;
const Calls = () => <Text>CALLS</Text>;

function TopTab() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="CHATS"
    >
      <Tab.Screen name="CAMERA" component={Camera} />
      <Tab.Screen name="CHATS" component={ConversationsList} />
      <Tab.Screen name="STATUS" component={Status} />
      <Tab.Screen name="CALLS" component={Calls} />
    </Tab.Navigator>
  );
}

export default TopTab;
