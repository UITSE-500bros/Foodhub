import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/base";
import axiosInstance from "../../service/axiosInstance";
type Voucher={
  created_at: string;
  updated_at: string;
  coupon_code: string;
  coupon_name: string;
  discount_value: number;
  expire_at: string;
  coupon_count: number;
}

export default function Coupons() {
  const [coupons, setCoupons] = React.useState<Voucher[]>([]);
  const fetchCoupons = async () => {
    try{
      const response = await axiosInstance.get('/coupon')
      setCoupons(response.data)
    }
    catch(error){
      console.log(error)
    }
  }
  React.useEffect(() => {
    fetchCoupons()
  }, [])
  console.log(Coupons);
  
  return (
    <SafeAreaView className="flex flex-col items-center p-5 bg-[#f9f9f9] h-full">
      {/* Header Section */}
      <Text className="text-[#3a3a3a] text-xl font-bold font-['Inter'] mb-5">
        Danh sách Coupon
      </Text>

      {/* Voucher Card */}
      <View className="w-full bg-white shadow-md rounded-lg p-5">
        <View className="mb-4">
          {/* Voucher Code */}
          <Text className="text-black text-xl font-extrabold mb-1">GPMN_1975</Text>
          <Text className="text-[#737373] text-sm font-medium">
            Áp dụng với hóa đơn trên 500,000
          </Text>
        </View>

        {/* Discount Info */}
        <View className="flex flex-row items-center mt-3">
          <Icon name="percent" size={24} color="#D2691E" />
          <Text className="text-[#333333] text-base font-semibold ml-2">
            Giảm 50%
          </Text>
        </View>

        {/* Copy Button */}
        <TouchableOpacity className="bg-[#D2691E] w-full h-12 rounded-lg mt-5 flex items-center justify-center">
          <Text className="text-white font-bold text-base">Copy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
