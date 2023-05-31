import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import HeaderComponent from "./src/components/HeaderComponent";
import FooterComponent from "./src/components/FooterComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <View style={styles.content}>
        <Text style={styles.contentText}>Content goes here</Text>
      </View>
      <FooterComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "lsta",
    justifyContent: "center",
    backgroundColor: '#393939'
  },
  contentText: {
    fontSize: 20,
  }
});
