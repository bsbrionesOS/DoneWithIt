import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "gray",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red Jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
  // <WelcomeScreen />;
  //<ViewImageScreen />;
}
