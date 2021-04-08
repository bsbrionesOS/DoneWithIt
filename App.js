import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import Messages from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    </Screen>
  );
  //<Messages />;
  //<ViewImageScreen />;
  //<ListingDetailsScreen></ListingDetailsScreen>;
  // <WelcomeScreen />;
}
