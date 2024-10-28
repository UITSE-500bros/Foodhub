import { View, Text } from "react-native";
import React from "react";
import { IconButton, TextInput } from "react-native-paper";

const NumberVerification = () => {
  const [number, setNumber] = React.useState("");
  return (
    <View className=" flex flex-col justify-center items-center mt-[140px]">
      <View>
        <Text className=" font-black text-2xl ">Enter your mobile number</Text>
        <View>
          <TextInput
            label="Phone number"
            value={number}
            onChangeText={(number) => setNumber(number)}
            mode="outlined"
            keyboardType="phone-pad"
            style={{ marginTop: 20, height: 50 }}
            placeholder="Enter your mobile number"
          />
        </View>
      </View>
      <View className="absolute right-0 bottom-0 mb-10">
        <IconButton
            icon="arrow-right"
          
            size={30}
            style={{
                backgroundColor: "#53b175",
                borderRadius: 50,
                width: 50,
                height: 50,
            }}
            onPress={() => console.log("Pressed")}
        />

      </View>
    </View>
  );
};

export default NumberVerification;
