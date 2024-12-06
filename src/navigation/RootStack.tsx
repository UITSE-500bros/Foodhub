import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../../type";
import { CategoryDetail } from "../screens/CategoryDetail";
import BottomTabNavigator from "./BottomTabNavigator";
import ProductDetail from "../screens/ProductDetail";

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
      <Stack.Screen
      name="CategoryDetail"
      component={CategoryDetail}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
