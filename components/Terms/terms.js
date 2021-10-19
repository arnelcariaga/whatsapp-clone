import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Text from "react-native-paper/src/components/Typography/Text";
import AvatarImage from "react-native-paper/src/components/Avatar/AvatarImage";
import Button from "react-native-paper/src/components/Button";
import Constants from "expo-constants";
const termsLogo = require("./../../assets/termsLogo.png");

export default function Termns({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomText}>Bienvenido a WhatsApp</Text>
      </View>

      <View style={styles.termsLogoContainer}>
        <AvatarImage size={280} source={termsLogo} />
      </View>

      <View style={styles.termsDescriptionContainer}>
        <Text style={styles.termsDescriptionText}>
          Toca "Aceptar y continuar" para aceptar los{" "}
          <Text style={{ color: "#0000EE" }}>
            T&eacute;rminos de Servicios de WhatsApp
          </Text>{" "}
          y{" "}
          <Text style={{ color: "#0000EE" }}>
            Pol&iacute;ticas de Privacidad.
          </Text>
        </Text>
      </View>

      <View style={styles.termsBtnContainer}>
        <Button
          mode="contained"
          uppercase
          onPress={() => navigation.push("navigation")}
          style={styles.termsButton}
        >
          Aceptar y continuar
        </Button>
      </View>

      <View style={styles.footerFromContainer}>
        <Text style={{ marginBottom: 5, color: "#999" }}>Desde</Text>
        <Text style={{ color: "#25d366", fontSize: 18, fontWeight: "bold" }}>
          FACEBOOK
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcomeContainer: {
    paddingTop: Constants.statusBarHeight,
    marginTop: 10,
  },
  termsLogoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  termsDescriptionContainer: {
    justifyContent: "flex-end",
    width: "85%",
  },
  termsDescriptionText: {
    marginBottom: 15,
    textAlign: "center",
  },
  termsBtnContainer: {
    justifyContent: "flex-end",
    width: "80%",
  },
  termsButton: {
    marginBottom: 25,
    backgroundColor: "#25d366",
  },
  welcomText: {
    fontSize: 25,
    color: "#379a8a",
    fontWeight: "bold",
  },
  footerFromContainer: {
    alignItems: "center",
    marginVertical: 15,
  },
});
