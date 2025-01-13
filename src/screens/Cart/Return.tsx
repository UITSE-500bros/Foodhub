import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from 'react';
import { Text, View } from "react-native";
import { AcceptedScreenNavigationProp, ReturnScreenRouteProp } from "../../../type";
import { validateVNPay } from "../../service/cart.service";

const Return = () => {
    const nav = useNavigation<AcceptedScreenNavigationProp>();
    const route = useRoute<ReturnScreenRouteProp>();
    useEffect(() => {
        // Extract the query parameters from the route.params object
        const Params = route.params;
        if(Params.vnp_ResponseCode !== "00"){
            nav.navigate("Error");
        }
        const queryString = new URLSearchParams(Params).toString();    
        validateVNPay(queryString).then((res) => {
            if (res === "Transaction successful") {
                nav.navigate("Accepted");
            }else{
                nav.navigate("Error");
            }
        });
    }, []);

    return (
        <View>
            <Text>Return Page</Text>

        </View>
    );
}

export default Return;