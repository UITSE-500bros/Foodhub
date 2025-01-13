import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../../type";
import { CategoryDetail } from "../screens/CategoryDetail";
import PhoneNumber from "../screens/PhoneNumber";
import ProductDetail from "../screens/ProductDetail";
import BottomTabNavigator from "./BottomTabNavigator";

import Accepted from "../screens/Accepted";
import AddressSelect from "../screens/AddressSelect/AddressSelect";
import VNpay from "../screens/Cart/VNpay";
import Error from "../screens/Error";
import { LocationRegister } from "../screens/LocationRegister";
import MyDetails from "../screens/MyDetails";
import Orders from '../screens/Orders';
import OTP from "../screens/OTP";
import Search from "../screens/Search";
import Survey from "../screens/Survey";
import Coupons from "../screens/Coupons/Coupons";
import Return from "../screens/Cart/Return";
import Login from "../screens/Login";

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
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} options={({route})=>({
        title: route.params.name,
      })

      } />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="LocationRegister" component={LocationRegister} options={{
        title: 'Đăng ký địa chỉ',
      }} />
      <Stack.Screen name="Survey" component={Survey} />
      <Stack.Screen
      name="VNpay"
      component={VNpay}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen
      name="Accepted"
      component={Accepted}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="Return" component={Return} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="Error" component={Error} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="Search" component={Search} options={{

      }} />
      <Stack.Screen name='MyDetails' component={MyDetails} options={{
        title: 'Thông tin của bạn'
      }}/>
      <Stack.Screen name= 'Orders' component={Orders} options={{
        title:'Đơn hàng của bạn'
      }}/>
      <Stack.Screen name = 'Coupons' component={Coupons} options={{
        title: 'Mã giảm giá'
      }}/>
      <Stack.Screen name = 'AddressSelect' component={AddressSelect} options={{
        title: 'Địa chỉ giao hàng'
      }}/>
    </Stack.Navigator>
  );
}
