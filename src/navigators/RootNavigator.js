// src/navigators/RootNavigator.js
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MenuScreen from "../screens/MenuScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Drawer com Welcome, Menu e Subscribe
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Welcome">
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="Menu" component={MenuScreen} />
      <Drawer.Screen name="Subscribe" component={SubscribeScreen} />
    </Drawer.Navigator>
  );
}

// Stack principal com Login + Drawer
export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
