import React from "react";
import { View } from "react-native";
import TextInput from "react-native-paper/src/components/TextInput/TextInput";
import Button from "react-native-paper/src/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setProfileAction } from "./../redux/setProfileDucks";

function SetProfile(props) {
  const [name, setName] = React.useState("");
  const dispatch = useDispatch();
  const number = useSelector((state) => state.verifyNumberData.number);

  const setProfileFunc = async () => {
    if (name === "") {
      alert("Please provide your name");
    } else {
      dispatch(setProfileAction({ name }));
      props.navigation.push("ConversationsScreenStack");
    }
  };
  return (
    <View style={{ paddingTop: 25, backgroundColor: "#fff", flex: 1 }}>
      <TextInput
        placeholder="Type your name"
        autoFocus
        onChangeText={(v) => setName(v)}
      />
      <Button onPress={setProfileFunc}> Done </Button>
    </View>
  );
}

export default SetProfile;
