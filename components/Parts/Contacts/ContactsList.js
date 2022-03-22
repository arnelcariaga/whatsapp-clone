import React from "react";
import ListItem from "react-native-paper/src/components/List/ListItem";
import AvatarImage from "react-native-paper/src/components/Avatar/AvatarImage";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { FlatList } from "react-native";
import users from "./../../redux/usersData.json";

function ContactsList({ navigation }) {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  const goToChat = (item) => {
    navigation.push("ChatScreenStack", {
      receiverId: item.login.uuid,
      fullName: item.name.first + " " + item.name.last,
      thumbnail: "https://source.unsplash.com/user/" + item.name.first,
    });
  };

  const renderItem = React.useCallback(
    ({ item }) => {
      return (
        <>
          {/* item.type ? (
            <>
              <ListItem
                title="New group"
                left={(props) => (
                  <AvatarIcon
                    icon={() => <Icon name="people" color="#fff" size={24} />}
                    {...props}
                    size={45}
                    style={{
                      marginTop: 5,
                      marginRight: 10,
                      backgroundColor: "#008069",
                    }}
                  />
                )}
                titleStyle={{
                  fontFamily: "Roboto_500Medium",
                }}
                onPress={() => {}}
              />
              <ListItem
                title="New contact"
                left={(props) => (
                  <AvatarIcon
                    icon={() => (
                      <Icon name="person-add" color="#fff" size={24} />
                    )}
                    {...props}
                    size={45}
                    style={{
                      marginTop: 5,
                      marginRight: 10,
                      backgroundColor: "#008069",
                    }}
                  />
                )}
                titleStyle={{
                  fontFamily: "Roboto_500Medium",
                }}
                onPress={() => {}}
              />
            </>
          ) : (
            
          ) */}
          <ListItem
            title={item.name.first + " " + item.name.last}
            descriptionNumberOfLines={1}
            description={item.location.country}
            descriptionEllipsizeMode="tail"
            left={(props) => (
              <AvatarImage
                source={{
                  uri: "https://source.unsplash.com/user/" + item.name.first,
                }}
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
            onPress={() => goToChat(item)}
          />
        </>
      );
    },
    [navigation]
  );

  if (!fontsLoaded) {
    return null;
  }
  return (
    <FlatList
      data={users["results"]}
      keyExtractor={(item) => item.login.uuid.toString()}
      renderItem={renderItem}
    />
  );
}

export default ContactsList;
