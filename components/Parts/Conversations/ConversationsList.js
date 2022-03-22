import React from "react";
import ListItem from "react-native-paper/src/components/List/ListItem";
import AvatarImage from "react-native-paper/src/components/Avatar/AvatarImage";
import Text from "react-native-paper/src/components/Typography/Text";
import FAB from "react-native-paper/src/components/FAB/FAB";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { View, StyleSheet } from "react-native";

function ConversationsList({ navigation }) {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });
  const [users, setUsers] = React.useState([]);

  const renderItem = React.useCallback(({ item }) => {
    return (
      <ListItem
        title={item.name.first + " " + item.name.last}
        descriptionNumberOfLines={1}
        description="Esta bien"
        descriptionEllipsizeMode="tail"
        left={(props) => (
          <AvatarImage
            source={{ uri: item.picture.thumbnail }}
            {...props}
            size={45}
            style={{
              marginTop: 5,
              marginRight: 10,
            }}
          />
        )}
        titleStyle={{
          fontFamily: "Roboto_500Medium",
        }}
        onPress={() => {}}
      />
    );
  });
  const onPressFAB = () => {
    navigation.push("ContactsScreenStack");
  };
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 40,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "gray",
          }}
        >
          To start messaging contacts who have WhatsApp, tap{" "}
          <Icon
            name="android-messages"
            size={18}
            style={{
              transform: [{ rotateX: "180deg" }, { rotateZ: "180deg" }],
            }}
          />{" "}
          at the bottom of your screen.
        </Text>
      </View>
      <FAB style={styles.fab} icon="android-messages" onPress={onPressFAB} />
      {/* <FlatList
      data={users}
      keyExtractor={(item) => item.login.uuid}
      renderItem={renderItem}
    /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    backgroundColor: "#00a884",
    height: 60,
    width: 60,
    borderRadius: 50,
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ConversationsList;
