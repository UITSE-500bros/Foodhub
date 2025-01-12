import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native-reanimated/lib/typescript/Animated";
import { WebView } from 'react-native-webview';
import { AcceptedScreenNavigationProp } from "../../../type";

const Return = () => {
    const uri = Linking.createURL('return');
    const [queryParams, setQueryParams] = useState({});
    const nav = useNavigation<AcceptedScreenNavigationProp>();
    useEffect(() => {
        // Listen for deep links when the app is opened
        const handleDeepLink = ({ url }: { url: string }) => {
            // Extract the query string from the URL
            const queryString = url.split('?')[1]; // Get the string after '?'
            if (queryString) {
                const params = new URLSearchParams(queryString);
                // Log the query parameters as an object
                setQueryParams(Object.fromEntries(params.entries()));

                if (params.get('vnp_ResponseCode') === '00') {
                    nav.navigate("Accepted")
                }
            }
        };
            
        handleDeepLink({ url: uri });
    }, []);

    return (
        <View>
            <Text>Return Page</Text>
            <Text>{JSON.stringify(queryParams)}</Text>
        </View>
    );
}

export default Return