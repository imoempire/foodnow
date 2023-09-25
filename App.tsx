import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import SignUp from "./src/Screens/SubScreens/SignUp";
import { IoElementsProvider } from "io-elements";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import {
  KeyboardAvoiderProvider,
  KeyboardAvoiderScrollView,
} from "@good-react-native/keyboard-avoider";

import {
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import MyStack from "./src/Components/Routes/Router";
import { NavigationContainer } from "@react-navigation/native";

const statusBar = Constants.statusBarHeight;
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Rale_Bold: Raleway_700Bold,
    Rale_Light: Raleway_300Light,
    Rale_Medium: Raleway_500Medium,
    Rale_Regular: Raleway_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoiderProvider>
      {/* <IoElementsProvider style={styles.container} > */}
        <View style={{flex: 1}} onLayout={onLayoutRootView}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </View>
      {/* </IoElementsProvider> */}
    </KeyboardAvoiderProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBar,
  },
});
