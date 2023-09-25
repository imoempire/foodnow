import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  PixelRatio,
} from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Goback from "../../Components/Navigation/Goback";
import { designColors } from "../../Constants/Colors";
import DesignText from "../../Components/Text";
import { Input, PhoneInput } from "io-elements";
import LongBtn from "../../Components/Touchables/LongBtn";
import { KeyboardAvoiderScrollView } from "@good-react-native/keyboard-avoider";

const SignUp = () => {
  let inputSize = 60;
  //   useEffect(() => {}, []);

  return (
    <KeyboardAvoiderScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled
      contentContainerStyle={styles.Container}
    >
      <View style={styles.frame_1}>
        <View style={{ height: "10%" }}>
          <DesignText
            children={"Create An Account"}
            TextStyle={{ fontSize: 33 }}
            FontFamily={"Rale_Bold"}
          />
        </View>
        <View
          style={{
            height: "17%",
            justifyContent: "center",
          }}
        >
          <Goback />
        </View>
        <View
          style={{
            flex: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("../../../assets/Illustartion.png")} />
        </View>
      </View>
      <View style={styles.frame_2}>
        <Input
          InputContainer={{ marginVertical: 10 }}
          label=""
          placeholder="First name"
          placeholderTextColor={designColors.black}
          TextInputStyle={{
            height: inputSize,
          }}
          InputborderStyle={{
            borderWidth: 2,
            borderColor: "#525252",
            borderRadius: 10,
          }}
          TextInputFontSize="15"
        />
        <Input
          InputContainer={{ marginVertical: 10 }}
          label=""
          placeholder="Last name"
          placeholderTextColor={designColors.black}
          TextInputStyle={{
            height: inputSize,
          }}
          InputborderStyle={{
            borderWidth: 2,
            borderColor: "#525252",
            borderRadius: 10,
          }}
          TextInputFontSize="15"
        />
        <PhoneInput
          InputContainer={{
            marginVertical: 10,
          }}
          color="#ffffff"
          codeButtonStyles={{ borderWidth: 2, borderColor: "#525252" }}
          InputStyles={{
            borderColor: "#525252",
            borderWidth: 2,
          }}
          height={inputSize}
          codeColor={designColors.black}
        />
        <Input
          InputContainer={{ marginVertical: 10 }}
          label=""
          placeholder="Email"
          placeholderTextColor={designColors.black}
          TextInputStyle={{
            height: inputSize,
          }}
          InputborderStyle={{
            borderWidth: 2,
            borderColor: "#525252",
            borderRadius: 10,
          }}
          TextInputFontSize="15"
        />
        <View style={{ paddingTop: 10 }}>
          <LongBtn title="Sign Up" />
        </View>
      </View>
    </KeyboardAvoiderScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Container: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  frame_1: {
    flex: 1,
  },
  frame_2: {
    flex: 1,
  },
});
