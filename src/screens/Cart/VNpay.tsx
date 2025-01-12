import { useRoute } from '@react-navigation/native'
import React from 'react'
import { WebView } from 'react-native-webview'
import { VNpayScreenRouteProp } from '../../../type'
import * as Linking from "expo-linking";

const VNpay = () => {
    const uri = useRoute<VNpayScreenRouteProp>().params.uri;
    

    return (
        <WebView
            source={{ uri: uri }}
        />
    )
}

export default VNpay