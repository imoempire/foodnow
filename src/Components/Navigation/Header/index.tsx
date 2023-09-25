import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyIcon from "../../Icon";
import DesignText from "../../Text";

const Header = () => {
  let size = 40;
  let Size = {
    width: size,
    height: size,
    borderRadius: size,
  };

  return (
    <View style={styles.header}>
      <MyIcon name={"menu"} size={30} color="black" />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MyIcon name={"location-sharp"} size={15} color="#F90F0F" />
        <DesignText
          children={"Greater Accra, Labone"}
          TextStyle={{ fontSize: 12, marginHorizontal: 5 }}
          FontFamily={"Rale_Medium"}
        />
      </View>
      <View style={[Size, { backgroundColor: "lightgray" }]} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
