import React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoryDetail } from "../screens/CategoryDetail";
import { RootStackParamList } from "../../type";

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
    </Stack.Navigator>
  );
}
