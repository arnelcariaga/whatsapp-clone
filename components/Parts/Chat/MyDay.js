import React from "react";
import { Day } from "react-native-gifted-chat";

function MyDay(props) {
  return (
    <Day
      {...props}
      wrapperStyle={{
        backgroundColor: "#d6eaf5",
        padding: 5,
        borderRadius: 5,
      }}
      textStyle={{
        color: "gray",
        textTransform: "capitalize",
      }}
    />
  );
}

export default MyDay;
