import { StyleSheet, View } from "react-native";
import React from "react";
import { Button } from "io-elements";
import DesignText from "../Text";
import { bgColor, designColors } from "../../Constants/Colors";

interface Props {
  title?: string;
}

const LongBtn = ({ title }: Props) => {
  return (
    <Button
      buttonStyle={{ height: 58 }}
      radius={10}
      buttonColor={bgColor.primary}
      onPress={() => {}}
    >
      <DesignText
        children={title}
        FontFamily="Rale_Medium"
        TextStyle={{ color: designColors.white, fontSize: 15 }}
      />
    </Button>
  );
};

export default LongBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "",
  },
});
