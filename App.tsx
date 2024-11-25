import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from "./src/screens/Home";
import Explore from "./src/screens/Explore";
import Cart from "./src/screens/Cart";
import Favorite from "./src/screens/Favorite";
import Profile from "./src/screens/Profile";
import {GOOGLE_ANDROID_CLIENT_ID} from "@env";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./src/screens/Login";

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState("");
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: GOOGLE_ANDROID_CLIENT_ID,
    scopes: ["profile", "email"],
  });

  const Tab = createMaterialBottomTabNavigator();


  useEffect(() => {
    handleEffect();
  }, [response, token]);

  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (response?.type === "success") {
        if (response.authentication) {
          getUserInfo(response.authentication.accessToken);
        }
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  }
  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token: string) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {

    }
  };

  return (
    !userInfo ? 
    <Login promptAsync={promptAsync}/> 
    : (<GestureHandlerRootView>
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
              <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                  tabBarLabel: "Cart",
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cart" color={color} size={26} />
                  ),
                }}
              />
              <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                  tabBarLabel: "Favorite",
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="heart" color={color} size={26} />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarLabel: "Profile",
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="account"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </GestureHandlerRootView>)
  );
}
