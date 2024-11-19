import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Cart from "./src/screens/Cart";
import Explore from "./src/screens/Explore";
import Favorite from "./src/screens/Favorite";
import Home from "./src/screens/Home";
import { Profile } from "./src/screens/Profile";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { auth } from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from "firebase/auth";
import { ANDROIDCLIENTID } from "@env";
import Login from "./src/screens/Login/Login";
WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '683806437988-vchbvafj8fd62lu649ji4h7h12rph83g.apps.googleusercontent.com',
  });
  console.log(ANDROIDCLIENTID);
  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const googleCredential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, googleCredential);
    }
  }, [response]);

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Login promptAsync={promptAsync} />
    //   <GestureHandlerRootView>
    //     <NavigationContainer>
    //       <SafeAreaProvider>
    //         <Tab.Navigator>
    //           <Tab.Screen
    //             name="Home"
    //             component={Home}
    //             options={{
    //               tabBarLabel: "Home",
    //               tabBarIcon: ({ color }) => (
    //                 <MaterialCommunityIcons name="home" color={color} size={26} />
    //               ),
    //             }}
    //           />
    //           <Tab.Screen
    //             name="Explore"
    //             component={Explore}
    //             options={{
    //               tabBarLabel: "Explore",
    //               tabBarIcon: ({ color }) => (
    //                 <MaterialCommunityIcons
    //                   name="compass"
    //                   color={color}
    //                   size={26}
    //                 />
    //               ),
    //             }}
    //           />
    //           <Tab.Screen
    //             name="Cart"
    //             component={Cart}
    //             options={{
    //               tabBarLabel: "Cart",
    //               tabBarIcon: ({ color }) => (
    //                 <MaterialCommunityIcons name="cart" color={color} size={26} />
    //               ),
    //             }}
    //           />
    //           <Tab.Screen
    //             name="Favorite"
    //             component={Favorite}
    //             options={{
    //               tabBarLabel: "Favorite",
    //               tabBarIcon: ({ color }) => (
    //                 <MaterialCommunityIcons name="heart" color={color} size={26} />
    //               ),
    //             }}
    //           />
    //           <Tab.Screen
    //             name="Profile"
    //             component={Profile}
    //             options={{
    //               tabBarLabel: "Profile",
    //               tabBarIcon: ({ color }) => (
    //                 <MaterialCommunityIcons
    //                   name="account"
    //                   color={color}
    //                   size={26}
    //                 />
    //               ),
    //             }}
    //           />
    //         </Tab.Navigator>
    //       </SafeAreaProvider>
    //     </NavigationContainer>
    //   </GestureHandlerRootView>
    
  );
}
