import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
            ></AppTextInput>
            <AppTextInput
              placeholder="password"
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              textContentType="password"
            ></AppTextInput>
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
