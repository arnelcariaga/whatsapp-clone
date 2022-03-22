import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "react-native-paper/src/components/Typography/Text";
import Icon from "react-native-vector-icons/MaterialIcons";

function TabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              paddingHorizontal: 15,
              paddingTop: 20,
              paddingBottom: 8,
              flexGrow: 1,
              borderBottomWidth: isFocused ? 2 : null,
              borderBottomColor: "#fff",
              backgroundColor: "#008069",
            }}
          >
            {label === "CAMERA" ? (
              <Icon
                name="camera-alt"
                style={{ color: isFocused ? "#fff" : "#b0dcd4" }}
                size={23}
              />
            ) : (
              <Text
                style={{
                  color: isFocused ? "#fff" : "#b0dcd4",
                  fontWeight: "bold",
                }}
              >
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
