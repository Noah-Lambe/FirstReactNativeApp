import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

export default function App() {
  console.log(require("./assets/favicon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="black"
        title="Press me"
        onPress={() =>
          Alert.alert("Title", "Message", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E579FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
