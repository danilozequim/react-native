import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import BottomTabsNavigator from "./BottomTabsNavigator";

import CustomAppBar from "../components/CustomAppBar";

import { COLORS, SIZES } from "../constants";

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        cardStyle: {
          backgroundColor: "blue",
        },
        headerTitle: (props) => <CustomAppBar title={props.children} />,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabsNavigator}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
