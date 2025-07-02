import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  console.log(require("./assets/favicon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <Image source={require("./assets/favicon.png")} />
      <StatusBar style="auto" />
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
