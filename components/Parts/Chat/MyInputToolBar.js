import React from "react";
import { InputToolbar } from "react-native-gifted-chat";
import MySend from "./MySend";
import MyComposer from "./MyComposer";

function MyInputToolBar(props) {
  return (
    <InputToolbar
      {...props}
      containerStyle={{ backgroundColor: "transparent", borderTopWidth: 0 }}
      primaryStyle={{
        margin: 8,
      }}
      renderComposer={MyComposer}
      renderSend={MySend}
    />
  );
}

export default MyInputToolBar;
