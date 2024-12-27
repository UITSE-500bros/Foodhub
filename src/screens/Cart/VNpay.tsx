import { useRoute } from '@react-navigation/native'
import React from 'react'
import { WebView } from 'react-native-webview'
import { VNpayScreenRouteProp } from '../../../type'

const VNpay = () => {
    const url = useRoute<VNpayScreenRouteProp>().params.uri
    console.log(url)
    return (
        <WebView
            source={{ uri: url }}
        />
    )
}

export default VNpay