import React from "react";
import { View } from "react-native";
import ChatUI from "../Parts/Chat/ChatUI";

function Chat(props) {
  return (
    <View
      style={{
        backgroundColor: "#ddd7cf",
        flex: 1,
      }}
    >
      <ChatUI {...props} />
    </View>
  );
}

export default Chat;
