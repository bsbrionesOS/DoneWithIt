import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What You Don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} onPress={() => console.log("Login")} />
        <AppButton
          title={"Register"}
          onPress={() => console.log("Register")}
          color={"secondary"}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
