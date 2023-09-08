import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { bgColor } from "../../Constants/Colors";

interface Props {
  name: undefined | string;
  color: string;
  size: number;
}

export default function MyIcon({ name, size, color = bgColor.black }: Props) {
  return (
    <>
      <Ionicons name={name} size={size} color={color} />
    </>
  );
}

const styles = StyleSheet.create({});
