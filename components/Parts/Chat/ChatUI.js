import React from "react";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { GiftedChat } from "react-native-gifted-chat";
import MyBubble from "./MyBubble";
import MyDay from "./MyDay";
import MyInputToolBar from "./MyInputToolBar";
import { useSelector } from "react-redux";

function ChatUI({ route }) {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });
  const [messages, setMessages] = React.useState([]);
  var receiverId = route.params.receiverId;
  var senderId = useSelector((s) => s.verifyNumberData.number);
  var socket = useSelector((s) => s.setSocketData.socket);

  React.useEffect(() => {
    let mount = false;
    async function getMessagesFunc() {
      try {
        if (mount) {
          await socket?.on("sendMessageFromServer", (data) => {
            if (receiverId === data[0].user._id) {
              setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, data)
              );
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    getMessagesFunc();

    return () => (mount = true);
  }, [socket, receiverId]);

  const onSend = React.useCallback(
    (messages = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
      socket?.emit("sendMessageFromClient", { messages, receiverId });
    },
    [socket, receiverId]
  );

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GiftedChat
      renderAvatar={null}
      alignTop={true}
      messages={messages}
      wrapperStyle={{
        backgroundColor: "#d9d0cb",
      }}
      renderBubble={MyBubble}
      renderDay={MyDay}
      renderInputToolbar={MyInputToolBar}
      minComposerHeight={38}
      placeholder="Type a message"
      onSend={(messages) => onSend(messages)}
      user={{
        _id: senderId,
        name: "Arnel",
        avatar:
          "https://i.picsum.photos/id/817/200/300.jpg?hmac=Egrlh6ZzXMOSu9esbUDMY8PhK3cBCmeqHyWBXm7dnHQ",
      }}
    />
  );
}

export default ChatUI;
