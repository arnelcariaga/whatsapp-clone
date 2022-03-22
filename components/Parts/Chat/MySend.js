import React from "react";
import { Send } from "react-native-gifted-chat";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconButton from "react-native-paper/src/components/IconButton";

function MySend(props) {
  if (props.text.length === 0) {
    return (
      <IconButton
        icon={() => <Icon name="mic" size={25} color="#fff" />}
        style={{
          backgroundColor: "#00a884",
          justifyContent: "center",
          height: "100%",
          marginLeft: 7,
          marginBottom: 0,
          marginRight: 0,
          borderRadius: 25,
          width: 39.5,
          height: 39.5,
          padding: 7,
        }}
      />
    );
  } else {
    return (
      <Send
        {...props}
        containerStyle={{
          backgroundColor: "#00a884",
          justifyContent: "center",
          height: "100%",
          marginLeft: 7,
          borderRadius: 25,
          width: 39.5,
          height: 39.5,
          padding: 7,
        }}
      >
        <Icon name="send" size={25} color="#fff" />
      </Send>
    );
  }
}

export default MySend;
