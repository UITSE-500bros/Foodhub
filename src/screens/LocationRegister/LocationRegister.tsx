import {
  View,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { Button } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { LocationRegisterScreenNavigationProp } from "../../../type";
import {
  getAllProvincesApi,
  getDistrictsByProvinceIdApi,
  getWardsByDistrictIdApi,
} from "./service/Location.service";
import { Picker } from "@react-native-picker/picker";
const LocationRegister = () => {
  const [road, setRoad] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selected, setSelected] = useState({
    province: "",
    district: "",
    ward: "",
  });
  const handleRoadInput = (text: string) => {
    setRoad(text);
  };
  useEffect(() => {
    const getAllProvince = async () => {
      getAllProvincesApi()
        .then((res) => setProvinces(res.data))
        .catch((err) => console.error(err));
    };
    getAllProvince();
  }, []);

  const handleProvinceChange = (itemValue: string) => {
    setSelected({ ...selected, province: itemValue });
    console.log(itemValue);

    getDistrictsByProvinceIdApi(itemValue)
      .then((res) => setDistricts(res.data))
      .catch((err) => console.error(err));
  };

  const handleDistrictChange = (itemValue: string) => {
    setSelected({
      ...selected,
      district: itemValue,
    });
    getWardsByDistrictIdApi(itemValue)
      .then((res) => setWards(res.data))
      .catch((err) => console.error(err));
  };

  console.log(selected);
  const getLocation = () => {
    if (!selected.province || !selected.district || !selected.ward || !road) {
      Alert.alert("Thông báo", "Vui lòng điền đầy đủ thông tin");
      return;
    }
    const province = provinces.find(
      (province) => province.id === selected.province
    );
    const district = districts.find(
      (district) => district.id === selected.district
    );
    const ward = wards.find((ward) => ward.id === selected.ward);
    const result = `${road}, ${ward.name}, ${district.name}, ${province.name}`;
    console.log(result);
    return result;
  };

  const handleSubmit = () => {
    const location = getLocation();
    if (location) {
      console.log(location);
      nav.navigate("AddressSelect");
    }
  };

  const nav = useNavigation<LocationRegisterScreenNavigationProp>();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex flex-col gap-4 ">
        <View className="w-full h-[170px] justify-center items-center">
          <Image
            source={require("../../../public/images/location.png")}
            className="w-[224px] h-[170px]"
          />
        </View>
        <Text className="text-center text-black text-2xl font-semibold">
          Chọn địa chỉ của bạn
        </Text>
        <Text className="text-center text-[#7c7c7c] text-base font-black font-['Inter']">
          Chọn vị trí của bạn để cập nhật những gì đang diễn ra trong khu vực
          của bạn
        </Text>
        <View className="mx-4 flex">
          <Text className="mx-4"> Đặt tên cho vị trí này</Text>
          <TextInput
            mode="flat"
            style={{  marginHorizontal: 10 ,backgroundColor:'transparent'}}
          />
        </View>

        <View className="mx-4">
          <Text className="ml-5">Tỉnh/Thành phố</Text>
          <Picker
            selectedValue={selected.province}
            onValueChange={(itemValue) => handleProvinceChange(itemValue)}
            placeholder="Chọn tỉnh thành"
          >
            <Picker.Item label="Chọn tỉnh thành" value="" />
            {provinces.map((province) => (
              <Picker.Item
                key={province.id}
                label={province.name}
                value={province.id}
              />
            ))}
          </Picker>
        </View>
        <View className="mx-4">
          <Text className="ml-5">Quận/Huyện</Text>
          <Picker
            selectedValue={selected.district}
            onValueChange={(itemValue) => handleDistrictChange(itemValue)}
            placeholder="Chọn quận huyện"
          >
            <Picker.Item label="Chọn quận huyện" value="" />
            {districts.map((district) => (
              <Picker.Item
                key={district.id}
                label={district.name}
                value={district.id}
              />
            ))}
          </Picker>
        </View>
        <View className="mx-4">
          <Text className="ml-5">Xã/Phường</Text>
          <Picker
            selectedValue={selected.ward}
            onValueChange={(itemValue) =>
              setSelected({ ...selected, ward: itemValue })
            }
            placeholder="Chọn xã phường"
          >
            <Picker.Item label="Chọn xã phường" value="" />
            {wards.map((ward) => (
              <Picker.Item key={ward.id} label={ward.name} value={ward.id} />
            ))}
          </Picker>
        </View>
        <View className="mx-4">
          <Text className="ml-5">Số nhà,tên đường</Text>
          <TextInput
            mode="flat"
            onChange={(e) => handleRoadInput(e.nativeEvent.text)}
            style={{ backgroundColor: "transparent", marginHorizontal: 10 }}
          />
        </View>
        <View className="w-full flex justify-center items-center mt-12 ">
          <Button
            title="Lưu"
            onPress={() => {
              handleSubmit();
            }}
            width={364}
            height={48}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LocationRegister;
