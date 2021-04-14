import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  Button,
  TabBarIOS,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Messages from "./app/screens/MessagesScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen from "./app/components/Screen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.value })}
    />
  </Stack.Navigator>
);

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { value: 1 })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text> Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text> TweetDetail</Text>
    <Text> hello {route.params.value}</Text>
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={StackNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
