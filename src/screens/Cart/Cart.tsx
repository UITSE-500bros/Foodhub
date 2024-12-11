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
  const [ready, setReady] = useState(false);
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  useEffect(() => {

    initialisePaymentSheet();
  }, []);

  const initialisePaymentSheet = async () => {
    try {
      const { paymentIntent, ephemeraKey, customer } = await fetchPaymentSheetParams();

      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: paymentIntent,
        customerId: customer,
        customerEphemeralKeySecret: ephemeraKey,
        merchantDisplayName: 'Example Inc.',
        allowsDelayedPaymentMethods: true,
        returnURL: 'payments-example://stripe-redirect',
        googlePay: {
          merchantCountryCode: 'VN',
          testEnv: true,
          currencyCode: 'vnd',
        },
      });

      if (error) {
        console.error("Error initializing payment sheet:", error);
      } else {
        setReady(true);
      }
    } catch (error) {
      console.error("Error during payment sheet initialization:", error);
    }
  };

  const fetchPaymentSheetParams = async () => {
    try {
      const response = await orderService.createOrder();
      const { paymentIntent, ephemeraKey, customer } = await response.json();
      return { paymentIntent, ephemeraKey, customer };
    } catch (error) {
      console.error("Error fetching payment sheet params:", error);
      throw error;
    }
  };

  const handlePayment = async () => {
    try {
      const { error } = await presentPaymentSheet();
      if (error) {
        console.error("Payment failed:", error.message);
        alert(`Error: ${error.message}`);
      } else {
        console.log("Payment successful!");
        alert("Payment completed successfully!");
      }
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