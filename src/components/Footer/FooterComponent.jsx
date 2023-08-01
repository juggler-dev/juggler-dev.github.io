import { StyleSheet, Text, View } from "react-native";

import GlobalStyle from "../../utils/GlobalStyle";

export default function FooterComponent() {
  const styles = StyleSheet.create({
    container: {
      height: 50,
      backgroundColor: "#252525",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "dodgerblue",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[GlobalStyle.generic, styles.text]}>Copyright © 2023 by Diego Santa Cruz</Text>
    </View>
  );
}
