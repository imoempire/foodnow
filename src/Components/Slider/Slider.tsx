import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
const { height, width } = Dimensions.get("window");
import dataImage from "./data";

export default function Slider() {
  const [data, SetData] = useState(dataImage);
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",  }}>
      <View
        style={{
          //   height: height / 2 + 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  width: width,
                  height: height / 3.9,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  disabled={true}
                  style={{
                    width: "90%",
                    height: "80%",
                    // backgroundColor: "green",
                    borderRadius: 10,
                  }}
                >
                  <Image
                    resizeMode="cover"
                    source={item?.image}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    // flex: 1,
                    flexDirection: "row",
                    width: width,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                >
                  {data.map((item, index) => {
                    return (
                      <View
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: 5,
                          borderWidth: currentIndex == index ? 1 : 1,
                          borderColor: currentIndex == index ? "#D6132A" : "black",
                          backgroundColor:
                            currentIndex == index ? "#D6132A" : "white",
                          marginLeft: 5,
                          marginTop: 5
                        }}
                      ></View>
                    );
                  })}
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 2
  },
});
