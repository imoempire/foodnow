import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FoodCard = () => {
  return (
    <View>
      <Text>FoodCard</Text>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
