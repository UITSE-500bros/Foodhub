import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { ProfileScreenNavigationProp } from "../../../type";
import { supabase } from "../../utils/supabase";
import Section from "./Section";

const Logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

const Profile = () => {
  const nav = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View className="pt-[80px] w-full h-[90%] flex items-center justify-between">
      <View className="">
        {/* <View>
          <Image source={} className="w-[30px] h-[30px]" />
          <Text className="text-[#4C4F4D] text-center text-lg font-semibold  ">
            I can cook
          </Text>
          <Text className="text-[#4C4F4D] text-center text-lg font-semibold  ">
            icancook@gmail.com
          </Text>
        </View> */}
        {/* Devider */}
        <View className="h-[1px] w-full bg-[#E2E2E2]" />
        <View className="mx-[25px]">
          {/* Orders */}
          <Section name="Đơn đặt hàng" icon="shopping-bag" onPress={()=>{
            nav.navigate('Orders')
          }} />
          {/* My Details */}
          <Section
            name="Thông tin của tôi"
            icon="user"
            onPress={() => {
                nav.navigate("MyDetails");
              }}
              />
          {/* Delivery Address */}
          <Section name="Địa chỉ giao hàng" icon="map-pin" onPress={()=>nav.navigate('AddressSelect')} />

       
         {/* Vouchers */}
          <Section name="Mã giảm giá" icon="gift" onPress={()=>nav.navigate('Coupons')} />
          {/* Notifications */}
          <Section name="Thông báo" icon="bell" />
          {/* Help  & About*/}
          <Section name="Thông tin liên hệ" icon="help-circle" />
        </View>
      </View>
      {/* Logout */}

      <TouchableOpacity
        className=" flex-row h-[67px]  flex items-center justify-center  bg-[#53B175] w-3/4 rounded-2xl"
        onPress={Logout}
      >
        <Icon color="white" name="log-out" type="feather" />
        <Text className="text-white text-center text-xl font-bold">
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
