import React from "react";
import { Bubble } from "react-native-gifted-chat";

function ChatBubble(props) {
  return (
    <Bubble
      {...props}
      textStyle={{
        right: {
          color: "#000",
        },
      }}
      timeTextStyle={{
        right: { color: "gray" },
      }}
      wrapperStyle={{
        right: {
          backgroundColor: "#d2ebbe",
        },
      }}
    />
  );
}

export default ChatBubble;
