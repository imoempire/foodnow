import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyIcon from "../Icon";
import { Input } from "io-elements";
import { designColors } from "../../Constants/Colors";
import DesignText from "../Text";

const SearchBox = () => {
  return (
    <View style={[styles.boxContainer, styles.boxWithShadow]}>
      <MyIcon name={"search-outline"} size={20} color="black" />
      <DesignText
        children={"search"}
        TextStyle={{ fontSize: 15, marginHorizontal: 7 }}
        FontFamily={"Rale_Medium"}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 7,
    height: 50,
    borderColor: "white",
    paddingHorizontal: 5,
    backgroundColor: "white",
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
