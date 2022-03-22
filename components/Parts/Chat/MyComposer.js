import React from "react";
import { View } from "react-native";
import { Composer } from "react-native-gifted-chat";
import IconButton from "react-native-paper/src/components/IconButton";
import Icon from "react-native-vector-icons/MaterialIcons";

function MyComposer(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 25,
        paddingVertical: 1,
        paddingHorizontal: 5,
      }}
    >
      <IconButton
        icon={() => <Icon name="insert-emoticon" size={25} color="gray" />}
        onPress={() => {
          alert("klk");
        }}
        style={{
          margin: 1,
        }}
      />

      <Composer
        {...props}
        textInputStyle={{
          marginBottom: 0,
          marginLeft: 0,
        }}
      />
      <IconButton
        icon={() => (
          <Icon
            name="attach-file"
            size={25}
            color="gray"
            style={{
              transform: [{ rotateY: "0deg" }, { rotateZ: "325deg" }],
            }}
          />
        )}
        onPress={() => {
          alert("klk");
        }}
        style={{
          margin: 1,
          marginRight: 10,
        }}
      />

      <IconButton
        icon={() => <Icon name="camera-alt" size={25} color="gray" />}
        onPress={() => {
          alert("klk");
        }}
        style={{
          margin: 1,
        }}
      />
    </View>
  );
}

export default MyComposer;
