import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Cart from "./src/screens/Cart";
import Explore from "./src/screens/Explore";
import Favorite from "./src/screens/Favorite";
import Home from "./src/screens/Home";
import { Profile } from "./src/screens/Profile";



export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={Explore}
            options={{
              tabBarLabel: "Explore",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="compass"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen name="Cart" component={Cart} options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={26} />
            ),
          }} />
          <Tab.Screen name="Favorite" component={Favorite} options={{
            tabBarLabel: "Favorite",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />),
          }} />
          <Tab.Screen name="Profile" component={Profile} options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />),
          }} />
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
