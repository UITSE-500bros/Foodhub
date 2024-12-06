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

    };

export type ExploreScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Explore'>;

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;
