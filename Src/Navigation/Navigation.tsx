import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../Screens/FirstScreen/FirstScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OTPScreen from "../Screens/OTPScreen";

type RootStackParamList = {
  FirstScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: { name: string };
  OpenPosition: { name: string };
  OrderHistory: { name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();



export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        {/* <Stack.Screen name="OpenPosition" component={OpenPosition} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
