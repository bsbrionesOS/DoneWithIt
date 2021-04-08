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
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return <ListingScreen />;
  //<AccountScreen />;
  // <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
  //<Messages />;
  //<ViewImageScreen />;
  //<ListingDetailsScreen></ListingDetailsScreen>;
  // <WelcomeScreen />;
}
