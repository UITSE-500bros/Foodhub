import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Skeleton } from "@rneui/base";
import axiosInstance from "../../service/axiosInstance";
import { FlatList } from "react-native-gesture-handler";
import Clipboard from "@react-native-clipboard/clipboard"; // Import Clipboard module
import Toast from "react-native-toast-message"; // Optional: for showing a toast message

type Coupon = {
  created_at: string;
  updated_at: string;
  coupon_code: string;
  coupon_name: string;
  discount_value: number;
  expire_at: string;
  coupon_count: number;
};

export default function Coupons() {
  const [coupons, setCoupons] = React.useState<Coupon[]>([]);

  const fetchCoupons = async () => {
    try {
      const response = await axiosInstance.get("/coupon");
      setCoupons(response.data);
    } catch (error) {
      throw new Error("Failed to fetch coupons");
    }
  };

  React.useEffect(() => {
    fetchCoupons();
  }, []);

  // Function to copy coupon code to clipboard
  const handleCopy = (couponCode: string) => {
    Clipboard.setString(couponCode); // Copy coupon code to clipboard

    // Show success toast (optional)
    Toast.show({
      type: "success",
      text1: "Coupon code copied!",
      visibilityTime: 2000,
      autoHide: true,
    });
  };

  return (
    <SafeAreaView className="flex flex-col items-center p-5 bg-[#f9f9f9] h-full">
      {/* Header Section */}
      <Text className="text-[#3a3a3a] text-xl font-bold font-['Inter'] mb-5">
        Danh sách mã giảm giá
      </Text>
      <View className="w-full flex flex-col items-center flex-1">
        {coupons.length > 0 ? (
          <FlatList
            data={coupons}
            keyExtractor={(item) => item.coupon_code}
            renderItem={({ item }) => (
              <View className="w-full bg-white shadow-md rounded-lg p-5 mb-4">
                <View className="mb-4">
                  {/* Voucher Code */}
                  <Text className="text-black text-xl font-extrabold mb-1">
                    {item.coupon_code}
                  </Text>
                </View>

                {/* Discount Info */}
                <View className="flex flex-row items-center mt-3">
                  <Icon name="percent" size={24} color="#D2691E" />
                  <Text className="text-[#333333] text-base font-semibold ml-2">
                    Giảm {item.discount_value}%
                  </Text>
                </View>

                {/* Copy Button */}
                <TouchableOpacity
                  className="bg-[#D2691E] w-full h-12 rounded-lg mt-5 flex items-center justify-center"
                  onPress={() => handleCopy(item.coupon_code)} // Call handleCopy on press
                >
                  <Text className="text-white font-bold text-base">Copy</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <View className="w-full flex flex-col items-center">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-full h-[132px] bg-white shadow-md rounded-lg p-5 mb-4"
                />
              ))}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
