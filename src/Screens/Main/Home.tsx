import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../../Components/Navigation/Header";
import SearchBox from "../../Components/Box/SearchBox";
import { KeyboardAvoiderScrollView } from "@good-react-native/keyboard-avoider";
import Slider from "../../Components/Slider/Slider";
import DesignText from "../../Components/Text";
import data from "../../utils/cateData";
import foodData from "../../utils/foodData";
import MyIcon from "../../Components/Icon";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <KeyboardAvoiderScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
      <View style={styles.Header}>
        <Header />
      </View>
      <View
        style={{
          flex: 0.3,
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <SearchBox />
      </View>
      <View style={styles.Slider}>
        <Slider />
      </View>
      <View style={styles.Category}>
        <DesignText
          children={"Popular categories"}
          TextStyle={{ fontSize: 24, marginHorizontal: 5 }}
          FontFamily={"Rale_Bold"}
        />
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View
                style={[styles.CategoryCard, { backgroundColor: item?.color }]}
                key={item?.id}
              >
                <MyIcon name={item?.icon} color="black" size={25} />
              </View>
            );
          }}
        />
      </View>
      {/* </KeyboardAvoiderScrollView> */}
      <View style={styles.Food}>
        <FlatList
          data={foodData}
          // horizontal
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View
                style={[
                  {
                    width: "48%",
                    height: 200,
                    borderRadius: 8,
                    backgroundColor: "white",
                    marginHorizontal: "1%",
                    marginVertical: 15,
                    padding: 5,
                    justifyContent: "space-between",
                    borderColor: "white",
                  },
                  styles.boxWithShadow,
                ]}
                key={item?.id}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MyIcon name={"star"} color="#FF9F06" size={15} />
                  <DesignText
                    children={item?.rate}
                    TextStyle={{ fontSize: 12, marginHorizontal: 5 }}
                    FontFamily={"Rale_Bold"}
                  />
                </View>
                <View style={{ alignItems: "center" }}>
                  <Image
                    resizeMode="cover"
                    source={item?.image}
                    // style={styles.image}
                  />
                </View>
                <View>
                  <DesignText
                    children={item?.name}
                    TextStyle={{ fontSize: 15, marginHorizontal: 5 }}
                    FontFamily={"Rale_Medium"}
                  />
                  <DesignText
                    children={item?.des}
                    TextStyle={{ fontSize: 10, marginHorizontal: 5 }}
                    FontFamily={"Rale_Light"}
                  />
                </View>
                <View
                  style={{
                    flex: 0.5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <DesignText
                    children={item?.price}
                    TextStyle={{
                      fontSize: 15,
                      marginHorizontal: 5,
                      color: "#D6132A",
                    }}
                    FontFamily={"Rale_Medium"}
                  />
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: "#D6132A",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 25,
                    }}
                  >
                    <MyIcon name={"add"} color="#FF9F06" size={15} />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    // justifyContent: "space-between",
  },
  Header: {
    flex: 0.2,
  },
  Slider: {
    flex: 0.8,
    // backgroundColor: "red",
    // alignItems: "center",
  },
  Category: {
    // flex: .01,
    paddingHorizontal: 10,
  },
  CategoryCard: {
    width: 100,
    height: 60,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 15,
  },
  Food: {
    flex: 1,
    paddingHorizontal: 10,
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: .01 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
