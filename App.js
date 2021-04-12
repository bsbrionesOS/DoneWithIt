import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, TextInput, View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Messages from "./app/screens/MessagesScreen";

export default function App() {
  return <ListingEditScreen />;
}
