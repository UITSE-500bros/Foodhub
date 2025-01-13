import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { HomeScreenNavigationProp, LoginScreenNavigationProp } from "../../../type";
import { makeRedirectUri } from "expo-auth-session";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import * as SecureStore from 'expo-secure-store';
import { API_URL } from "@env";
import { getTokens, storeTokens } from "../../service/tokenEncrypted";
import userService from "../../service/user.service";

WebBrowser.maybeCompleteAuthSession();
const Login = () => {
  const nav = useNavigation<LoginScreenNavigationProp>()
  const redirectTo = makeRedirectUri();
  const performOAuth = async (logintype: string) => {
    try {
      const response = await fetch(`${API_URL}/user/${logintype}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (data.url) {
          const res = await WebBrowser.openAuthSessionAsync(
            data.url,
            redirectTo
          );
          if (res.type === "success") {
            const { url } = res;

            // Save the accessToken to the secure store
            const { params, errorCode } = QueryParams.getQueryParams(url);

            if (errorCode) throw new Error(errorCode);
            const { access_token, refresh_token } = params;
            console.log(access_token, refresh_token);
            if (access_token && refresh_token) {
              await storeTokens(access_token, refresh_token);
              const result = await userService.setSession(access_token, refresh_token);
              if (result) {
                nav.navigate("BottomTabNavigator");
              }
            } else {
              console.error("No access token found in the response");
            }
          }
        } else {
          console.error("No URL found in the response");
        }
      } else {
        console.error("Failed to fetch OAuth URL:", response.statusText);
      }
    } catch (error) {
      console.error("Error during OAuth request:", error);
    }
  };

  useEffect(() => {
    const handleExitToken = async () => {
      const tokens = await getTokens();
      console.log(tokens);
      if (tokens) {
        nav.navigate("BottomTabNavigator")
      }
    }
    handleExitToken();
  }, []);

  return (
    <View className="h-full w-full">
      <Image
        source={require("../../../assets/maskgroup.png")}
        className="w-full h-[35%]"
      />
      <Text className="text-2xl text-center font-bold">
       Thoải mái mua hàng tạp hóa của bạn với Foodhub
      </Text>

      {/* <Text className='text-center mt-3'>Enter your email to get started</Text>
            <View className='h-[1px] bg-black mx-3 mt-3'/>
            <View className='h-[1px] bg-black mx-3 mt-3'/>

            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View className='bg-yellow-500 mx-4 mt-3 rounded-s-lg'>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            cursorColor={'black'}
                            className='border-[1px] border-black'
                        />
                        <Button onPress={handleSubmit as (e?: GestureResponderEvent) => void} title="Submit" />
                    </View>
                )}
            </Formik> */}
      <View className="mt-[160px]">
        <Text className="text-center">Tiếp tục với</Text>
        <Button
          title="Sign in with google"
          icon={
            <Image
              source={require("../../../assets/google.png")}
              className="w-8 h-8"
            />
          }
          iconContainerStyle={{ marginRight: 50 }}
          titleStyle={{
            fontWeight: "700",
            color: "black",
          }}
          buttonStyle={{
            backgroundColor: "white",
            borderColor: "#889397",
            borderWidth: 1,
            borderRadius: 10,
            paddingVertical: 20, // Optional padding for box content
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
          containerStyle={{
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          onPress={() => {
            performOAuth('google')
          }}
        />

        <Button
          title="Sign in with facebook"
          icon={
            <Image
              source={require("../../../assets/facebook.png")}
              className="w-8 h-8"
            />
          }
          iconContainerStyle={{ marginRight: 50 }}
          titleStyle={{
            fontWeight: "700",
            color: "black",
          }}
          buttonStyle={{
            backgroundColor: "white",
            borderColor: "#889397",
            borderWidth: 1,
            borderRadius: 10,
            paddingVertical: 20,

            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
          containerStyle={{
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          onPress={() => {
            performOAuth('facebook')
          }}
        />
      </View>
    </View>
  );
};

export default Login;
