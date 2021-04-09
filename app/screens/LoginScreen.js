import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        placeholder="Email"
        icon="email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
      ></AppTextInput>
      <AppTextInput
        placeholder="password"
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        textContentType="password"
      ></AppTextInput>
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
