import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { Button } from "@rneui/themed";

const Profile = () => {
  return (
    <View className="pt-[80px] w-full h-[90%] flex justify-between">
      <View className="">
        <View>
          {/* <Image source={} className="w-[30px] h-[30px]" /> */}
          <Text className="text-[#4C4F4D] text-center text-lg font-semibold  ">
            I can cook
          </Text>
          <Text className="text-[#4C4F4D] text-center text-lg font-semibold  ">
            icancook@gmail.com
          </Text>
        </View>
        {/* Devider */}
        <View className="h-[1px] w-full bg-[#E2E2E2]" />
        <View className="mx-[25px]">
          {/* Orders */}
          <TouchableOpacity className="flex flex-row justify-between items-center h-[70px] ">
            <View className="flex flex-row  items-center">
              <Icon name="shopping-bag" type="feather" />
              <Text className="text-[#4C4F4D] text-center text-lg font-semibold   ml-[15px]">
                Orders
              </Text>
            </View>
            <Icon name="chevron-right" type="entypo" />
          </TouchableOpacity>
          <View className="h-[1px] w-full bg-[#E2E2E2]" />
          {/* My Details */}
          <TouchableOpacity className="flex flex-row justify-between items-center h-[70px] ">
            <View className="flex flex-row  items-center">
              <Icon name="shopping-bag" type="feather" />
              <Text className="text-[#4C4F4D] text-center text-lg font-semibold   ml-[15px]">
                My Details
              </Text>
            </View>
            <Icon name="chevron-right" type="entypo" />
          </TouchableOpacity>
          <View className="h-[1px] w-full bg-[#E2E2E2]" />
          {/* Delivery Address */}
          <TouchableOpacity className="flex flex-row justify-between items-center h-[70px] ">
            <View className="flex flex-row gap-x-[20px]">
              <Icon name="shopping-bag" type="feather" />
              <Text className="text-[#4C4F4D] text-center text-lg font-semibold  ">
                Delivery Address
              </Text>
            </View>
            <Icon name="chevron-right" type="entypo" />
          </TouchableOpacity>
          <View className="h-[1px] w-full bg-[#E2E2E2]" />
          {/* Payment Methods*/}
          <TouchableOpacity className="flex flex-row justify-between items-center h-[70px] ">
            <View className="flex flex-row gap-x-[20px]">
              <Icon name="shopping-bag" type="feather" />
              <Text className="text-[#4C4F4D] text-center text-lg font-semibold  ">
                Payment Methods
              </Text>
            </View>
            <Icon name="chevron-right" type="entypo" />
          </TouchableOpacity>
          <View className="h-[1px] w-full bg-[#E2E2E2]" />
          {/* Vouchers */}
          <TouchableOpacity className="flex flex-row justify-between items-center h-[70px] ">
            <View className="flex flex-row gap-x-[20px]">
              <Icon name="shopping-bag" type="feather" />
              <Text className="text-[#4C4F4D] text-center text-lg font-semibold  ">
                Vouchers
              </Text>
            </View>
            <Icon name="chevron-right" type="entypo" />
          </TouchableOpacity>
          <View className="h-[1px] w-full bg-[#E2E2E2]" />
          {/* Notifications */}
          <TouchableOpacity className="flex flex-row justify-between items-center h-[70px] ">
            <View className="flex flex-row gap-x-[20px]">
              <Icon name="shopping-bag" type="feather" />
              <Text className="text-[#4C4F4D] text-center text-lg font-semibold  ">
                Notifications
              </Text>
            </View>
            <Icon name="chevron-right" type="entypo" />
          </TouchableOpacity>
          <View className="h-[1px] w-full bg-[#E2E2E2]" />
          {/* Help  & About*/}
          <TouchableOpacity className="flex flex-row justify-between items-center h-[70px] ">
            <View className="flex flex-row gap-x-[20px]">
              <Icon name="shopping-bag" type="feather" />
              <Text className="text-[#4C4F4D] text-center text-lg font-semibold  ">
                Help & About
              </Text>
            </View>
            <Icon name="chevron-right" type="entypo" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Logout */}

      <Button
        title="Log Out"
        icon={{
          name: "logout",
          type: "material",
          size: 24,
          color: "#53B175",
        }}
        iconContainerStyle={{}}
        titleStyle={{
          fontWeight: "700",
          color: "#53B175",
          fontSize: 18,
          width: "80%",
          textAlign: "left",
          paddingLeft: 80,
        }}
        buttonStyle={{
          backgroundColor: "#F2F3F2",
          borderRadius: 15,
          display: "flex",
          alignItems: "center",
          height: 70,
          marginHorizontal: 25,
          justifyContent: "space-around",
        }}
      />
    </View>
  );
};

export default Profile;
