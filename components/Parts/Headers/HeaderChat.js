import React from "react";
import Appbar from "react-native-paper/src/components/Appbar";
import Icon from "react-native-vector-icons/MaterialIcons";
import AvatarImage from "react-native-paper/src/components/Avatar/AvatarImage";

function HeaderChat({ route }) {
  var { params } = route;
  return (
    <Appbar.Header style={{ backgroundColor: "#008069" }}>
      <Appbar.BackAction
        onPress={() => {}}
        style={{ marginRight: 0, marginLeft: 0 }}
        size={20}
      />
      <AvatarImage
        source={{
          uri: params.thumbnail,
        }}
        size={40}
        style={{
          backgroundColor: "pink",
        }}
      />
      <Appbar.Content
        title={params.fullName}
        subtitle="Online"
        subtitleStyle={{ color: "#fff" }}
        style={{
          marginLeft: 0,
          marginRight: 0,
        }}
      />
      <Appbar.Action
        icon={(props) => <Icon name="videocam" {...props} />}
        onPress={() => {}}
        style={{
          marginLeft: 0,
        }}
      />
      <Appbar.Action
        icon={(props) => <Icon name="call" {...props} />}
        onPress={() => {}}
        style={{
          marginLeft: 0,
          marginRight: 0,
        }}
      />
      <Appbar.Action
        icon="dots-vertical"
        onPress={() => {}}
        style={{
          marginLeft: 0,
          marginRight: 0,
        }}
      />
    </Appbar.Header>
  );
}

export default HeaderChat;
