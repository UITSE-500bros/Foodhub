import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import React from "react";
import { Image, Text, View } from "react-native";
import { LoginScreenNavigationProp } from "../../../type";
import { makeRedirectUri } from "expo-auth-session";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { supabase } from "../../utils/supabase";
WebBrowser.maybeCompleteAuthSession(); // required for web only

const redirectTo = makeRedirectUri();

const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);

  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });
  if (error) throw error;
  return data.session;
};

const performOAuth = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google", // Change provider to Google
    options: {
      redirectTo,
      skipBrowserRedirect: true,
    },
  });
  if (error) throw error;
  
  const res = await WebBrowser.openAuthSessionAsync(
    data?.url ?? "",
    redirectTo
  );
  
  if (res.type === "success") {
    const { url } = res;
    await createSessionFromUrl(url);
  }
};


const Login = () => {
  const nav = useNavigation<LoginScreenNavigationProp>()

  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);

  console.log(redirectTo);

  return (
    <View className="h-full w-full">
      <Image
        source={require("../../../assets/maskgroup.png")}
        className="w-full h-[35%]"
      />
      <Text className="text-2xl text-center font-bold">
        Get your groceries with Foodhub
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
        <Text className="text-center">Continue with</Text>
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
            // nav.navigate("PhoneNumber")
            performOAuth();
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
        />
      </View>
    </View>
  );
};

export default Login;
