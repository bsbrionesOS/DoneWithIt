import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import Messages from "./app/screens/MessagesScreen";

export default function App() {
  return <Messages />;
  //<ViewImageScreen />;
  //<ListingDetailsScreen></ListingDetailsScreen>;
  // <WelcomeScreen />;
}
