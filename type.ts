import { StackNavigationProp } from "@react-navigation/stack";

import { RouteProp } from "@react-navigation/native";
import Product from "./src/models/Product";

export type RootStackParamList = {
  Home: undefined;
  Explore: undefined;
  CategoryDetail: { id: string,name:string };
  ProductDetail: { id: string };
  Cart: undefined;
  Profile: undefined;
  BottomTabNavigator: undefined;
  Login: undefined;
  Accepted: undefined;
  PhoneNumber: undefined;
  OTP: undefined;
  LocationRegister: undefined;
  Survey: undefined;
  VNpay: { uri: string };
  Search: undefined;
  MyDetails: undefined;
  Orders: undefined;
  Coupons: undefined;
  AddressSelect: undefined;
  Error: undefined;
  Return: { queryParams: any };
  Review: {product: Product}
};
export type ErrorScreenNavigationProp = StackNavigationProp<RootStackParamList,"Error">;
export type AcceptedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,"Accepted">;
export type ExploreScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Explore"
>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

export type PhoneNumberScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PhoneNumber"
>;

export type OTPScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "OTP"
>;

export type LocationRegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "LocationRegister"
>;

export type CategoryDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CategoryDetail"
>;

export type VNpayScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "VNpay"
>;
export type VNpayScreenRouteProp = RouteProp<RootStackParamList, "VNpay">;

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;
export type ReturnScreenRouteProp = RouteProp<RootStackParamList, "Return">;
