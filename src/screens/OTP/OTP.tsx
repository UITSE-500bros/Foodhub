import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
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
import {
  Button,
  IconButton,
  TextInput as PaperTextInput,
} from "react-native-paper";
import { OTPScreenNavigationProp } from "../../../type";

const OTP = () => {
  const [code, setCode] = useState("");

  const handleCodeChange = (input: string) => {
    // Ensure only numeric input and limit to 4 characters
    const numericInput = input.replace(/[^0-9]/g, "");
    if (numericInput.length <= 4) {
      setCode(numericInput);
    }
  };

  const nav =useNavigation<OTPScreenNavigationProp>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Nhập mã 4 chữ số</Text>
          <PaperTextInput
            label="****"
            value={code}
            onChangeText={handleCodeChange}
            mode="outlined"
            keyboardType="numeric"
            maxLength={4}
            style={styles.textInput}
            placeholder="Enter your 4-digit code"
          />
          <View style={styles.buttonContainer}>
            <Button
              mode="text"
              onPress={() => console.log("Resend code")}
              labelStyle={{ fontSize: 18, fontWeight: "900", lineHeight: 29 }}
              textColor="#53B175"
            >
              Gửi lại
            </Button>
            <Button
              mode="contained"
              onPress={() => nav.navigate("LocationRegister")}
              style={styles.submitButton}
            >
              Xác nhận
            </Button>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  submitButton: {
    backgroundColor: "#53B175",
  },
});

export default OTP;
