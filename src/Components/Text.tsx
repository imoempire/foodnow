import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import React from "react";

interface Props {
  TextStyle: StyleProp<TextStyle>;
  FontFamily: "Rale_Bold" | "Rale_Light" | "Rale_Medium" | "Rale_Regular";
  children: any;
}

const DesignText = ({
  TextStyle = {
    fontSize: 20,
    color: "#000000",
  },
  FontFamily = "Rale_Regular",
  children,
}: Props) => {
  return (
    <Text style={[{ fontFamily: FontFamily }, TextStyle]}>{children}</Text>
  );
};

export default DesignText;

const styles = StyleSheet.create({});
