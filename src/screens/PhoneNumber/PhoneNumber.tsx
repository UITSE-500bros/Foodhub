import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { IconButton, TextInput as PaperTextInput } from "react-native-paper";

const PhoneNumber = () => {
  const [number, setNumber] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}

      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Enter your mobile number</Text>
          <PaperTextInput
            label="Phone number"
            value={number}
            onChangeText={(number) => setNumber(number)}
            mode="outlined"
            keyboardType="phone-pad"
            style={styles.textInput}
            placeholder="Enter your mobile number"
          />
          <View className=" flex  ">
            <IconButton
              icon="arrow-right"
              iconColor="#fff"
              size={20}
              onPress={() => console.log("Pressed")}
              style={{ backgroundColor: "#53b175" }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    width: "100%",
    marginBottom: 20,
  },
});

export default PhoneNumber;
