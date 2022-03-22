import React from "react";
import { View } from "react-native";
import TextInput from "react-native-paper/src/components/TextInput/TextInput";
import Button from "react-native-paper/src/components/Button";
import { useDispatch } from "react-redux";
import { setNumberVerificationAction } from "./../redux/verifyNumberDucks";
import { setSocketAction } from "./../redux/setSocketDucks";
import { io } from "socket.io-client";

function VerifyNumber(props) {
  const [number, setNumber] = React.useState("");
  const dispatch = useDispatch();
  const [socket, setSocket] = React.useState();

  React.useEffect(() => {
    setSocket(io("http://10.0.0.208:8000"));
  }, []);

  const verifyNumberFunc = () => {
    if (number === "") {
      alert("Please provide your number");
    } else {
      socket.emit("joinUser", { userId: number });
      dispatch(setSocketAction(socket));
      dispatch(setNumberVerificationAction(number));
      props.navigation.push("SetProfileScreenStack");
    }
  };

  return (
    <View style={{ paddingTop: 25, backgroundColor: "#fff", flex: 1 }}>
      <TextInput
        placeholder="Type your number"
        autoFocus
        onChangeText={(v) => setNumber(v)}
      />
      <Button onPress={verifyNumberFunc}> Continue </Button>
    </View>
  );
}

export default VerifyNumber;
