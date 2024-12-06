import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    Explore: undefined;
    CategoryDetail: undefined;
    ProductDetail: undefined;
    Cart: undefined;
    Profile: undefined;
    BottomTabNavigator: undefined;

    };

export type ExploreScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Explore'>;

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;
