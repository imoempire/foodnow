import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyIcon from "../Icon";
import { bgColor } from "../../Constants/Colors";

const size = 35;
const Goback = () => {
  return (
    <View style={styles.Container}>
      <MyIcon name={"md-arrow-back-outline"} color="#FFFFFF" size={20} />
    </View>
  );
};

export default Goback;

const styles = StyleSheet.create({
  Container: {
    width: size,
    height: size,
    backgroundColor: bgColor.black,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
