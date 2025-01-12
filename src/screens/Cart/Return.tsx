import { useNavigation, useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";
import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import { AcceptedScreenNavigationProp, ReturnScreenRouteProp } from "../../../type";
import { validateVNPay } from "../../service/cart.service";

const Return = () => {

    const nav = useNavigation<AcceptedScreenNavigationProp>();

    const route = useRoute<ReturnScreenRouteProp>();
    useEffect(() => {
        // Extract the query parameters from the route.params object
        const Params = route.params;

        const queryString = new URLSearchParams(Params).toString();
        console.log(queryString);
        validateVNPay(queryString).then((res) => {
            console.log(res);
        });
    }, []);



    return (
        <View>
            <Text>Return Page</Text>

        </View>
    );
}

export default Return;