import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CheckBox } from "@rneui/base";
const Radio = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <View className=" flex flex-row items-center gap-2">
      <CheckBox
        title={"Yes"}
        checked={selectedIndex === 0}
        onPress={() => {
          setSelectedIndex(0);
        }}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.container}
        checkedColor="#53B175"
      />

      <CheckBox
        checkedColor="#53B175"
        title={"No"}
        checked={selectedIndex === 1}
        onPress={() => {
          setSelectedIndex(1);
        }}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.container}
      />
    </View>
  );
};

export default Radio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
  },
});
