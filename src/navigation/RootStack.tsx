import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../../type";
import { CategoryDetail } from "../screens/CategoryDetail";
import BottomTabNavigator from "./BottomTabNavigator";
import ProductDetail from "../screens/ProductDetail";
import Login from "../screens/Login";
import PhoneNumber from "../screens/PhoneNumber";

import { LocationRegister } from "../screens/LocationRegister";
import OTP from "../screens/OTP";
import Survey from "../screens/Survey";
import VNpay from "../screens/Cart/VNpay";
import Search from "../screens/Search";
import MyDetails from "../screens/MyDetails";
import Orders from '../screens/Orders'
import Vouchers from "../screens/Vouchers";

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="LocationRegister" component={LocationRegister} />
      <Stack.Screen name="Survey" component={Survey} />
      <Stack.Screen
        name="VNpay"
        component={VNpay}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name='MyDetails' component={MyDetails}/>
        <Stack.Screen name= 'Orders' component={Orders}/>
        <Stack.Screen name = 'Vouchers' component={Vouchers}/>
    </Stack.Navigator>
  );
}
