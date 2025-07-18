import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
import { useWindowDimensions } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const { width, height } = useWindowDimensions();
  console.log(width);
  console.log(height);
  const isLandscape = width > height;
  console.log("isLandscape?", isLandscape);

  // const { landscape } = useDeviceOrientation();
  // console.log("landscape?", landscape);
  console.log(require("./assets/favicon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: isLandscape ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#E579FF",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
