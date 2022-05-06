import React from "react";
import { Text, Platform, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";

import { COLORS, SIZES } from "../constants";

export default () => {
  const BottomTab = createBottomTabNavigator();

  const TabButton = ({ label, icon, focused }) => {
    return (
      //View Resposável pelo grupo de icon e label
      <View
        style={[
          {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        {/*View responsável pelo icon e label */}
        <View
          style={[
            {
              flexDirection: "column",
              height: 50,
              minWidth: 50,
              paddingHorizontal: SIZES.margin,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              backgroundColor: focused ? COLORS.primary : COLORS.white,
            },
          ]}
        >
          {icon}

          {focused ? (
            <Text
              numberOfLines={1}
              style={{
                color: focused ? COLORS.white : COLORS.primary,
                fontSize: SIZES.fontSmallest,
              }}
            >
              {label}
            </Text>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    );
  };

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: "95%",
          height: 80,
          marginBottom: SIZES.margin * 3,
          alignSelf: "center",
          paddingHorizontal: SIZES.margin,
          paddingTop: Platform.OS === "ios" ? 25 : 0,
          backgroundColor: COLORS.grayLight,
          borderRadius: 50,
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              label="Home"
              focused={focused}
              icon={
                <Ionicons
                  name="home"
                  size={20}
                  color={focused ? COLORS.white : COLORS.primary}
                />
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SearcheTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              label="Search"
              focused={focused}
              icon={
                <Ionicons
                  name="search-outline"
                  size={20}
                  color={focused ? COLORS.white : COLORS.primary}
                />
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CarrinhoTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              label="Carrinho"
              focused={focused}
              icon={
                <Ionicons
                  name="ios-cart-outline"
                  size={20}
                  color={focused ? COLORS.white : COLORS.primary}
                />
              }
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="FavoriteTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              label="Favorite"
              focused={focused}
              borderRadius={0}
              icon={
                <Ionicons
                  name="heart-outline"
                  size={20}
                  color={focused ? COLORS.white : COLORS.primary}
                />
              }
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Notification"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              label="Notification"
              focused={focused}
              icon={
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color={focused ? COLORS.white : COLORS.primary}
                />
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
