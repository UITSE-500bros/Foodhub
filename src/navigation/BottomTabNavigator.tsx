import React from "react";
import Survey from "../screens/Survey";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Explore from "../screens/Explore";
import Cart from "../screens/Cart";
import Favorite from "../screens/Favorite";
import Profile from "../screens/Profile";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import useCartStore from "../screens/Cart/store/CartStore";
import { useFavoriteStore } from "../screens/Favorite/FavoriteStore";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const cart = useCartStore((state) => state.cart);
  const cartItems=cart.length;
  const {favoriteProducts} = useFavoriteStore();
  const favoriteQuantity = favoriteProducts.length;

  return (
    <Tab.Navigator>
      <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Trang chủ",
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
        headerShown: false,
      }}
      />
      <Tab.Screen
      name="Explore"
      component={Explore}
      options={{
        tabBarLabel: "Khám phá",
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="compass" color={color} size={26} />
        ),
        headerShown: false,
      }}
      />
      <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarLabel: "Giỏ hàng",
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="cart" color={color} size={26} />
        ),
        tabBarBadge: cartItems,
        headerShown: false,
      }}
      />
      <Tab.Screen
      name="Favorite"
      component={Favorite}
      options={{
        tabBarLabel: "Yêu thích",
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="heart" color={color} size={26} />
        ),
        headerShown: false,
        tabBarBadge: favoriteQuantity,
      }}
      />
      <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: "Hồ sơ",
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
        headerShown: false,
      }}
      />
    </Tab.Navigator>
  );
}
