import { PUBLISABLE_KEY } from "@env";
import { StripeProvider, usePaymentSheet } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductCard } from "../../components";
import { orderService } from "../../service";

const data = Array.from({ length: 20 }, (_, i) => i + 1);

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const width= Dimensions.get('window').width
  const height= Dimensions.get('window').height

  const handlePayment = async () => {
    try {
      
    } catch (error) {
      console.error("Error presenting payment sheet:", error);
    }
  };

  return (
    <StripeProvider
      publishableKey={PUBLISABLE_KEY}
      merchantIdentifier="merchant.identifier" // Ensure this is valid
      urlScheme="android.intent.action.VIEW"
    >
      <SafeAreaView>
        <View className="flex justify-center items-center mt-10">
          <Text className="text-center text-[#181725] text-xl font-black">
            My Cart
          </Text>
        </View>
        <FlatList
          data={data}
          style={{ width: width, height: height - 200 }}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <View className="m-1">
              <View className="h-[1px] bg-[#E5E5E5]" />
              <ProductCard adjust />
            </View>
          )}
        />
        <TouchableOpacity
          className={`absolute h-[67px] bottom-0 flex items-center justify-center left-6 right-6 ${ready ? 'bg-[#53B175]' : 'bg-gray-400'
            } rounded-2xl`}
          onPress={handlePayment}
          disabled={!ready || loading}
        >
          <Text className="text-white">{loading ? 'Loading...' : 'Checkout'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </StripeProvider>
  );
};

export default Cart;