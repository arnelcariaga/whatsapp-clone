import React from "react";
import Appbar from "react-native-paper/src/components/Appbar";
import { View } from "react-native";

function HeaderRight() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Appbar.Action icon="magnify" color="#fff" onPress={() => {}} />
      <Appbar.Action
        icon="dots-vertical"
        onPress={() => {}}
        color="#fff"
        style={{ marginLeft: 0 }}
      />
    </View>
  );
}

export default HeaderRight;
