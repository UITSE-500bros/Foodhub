import { StackNavigationProp } from "@react-navigation/stack";
import { LoginProps } from "./src/screens/Login/Login";

export type RootStackParamList = {
  Home: undefined;
  Explore: undefined;
  CategoryDetail: undefined;
  ProductDetail: undefined;
  Cart: undefined;
  Profile: undefined;
  BottomTabNavigator: undefined;
  Login: LoginProps;
  PhoneNumber: undefined;
  OTP: undefined;
  LocationRegister: undefined;
};

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
