import { StyleSheet, View, Text } from "react-native";

import GlobalStyle from "../../utils/GlobalStyle";

export default function Contact() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#176CC0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    content: {
      width: "60%",
      alignItems: "center",
    },
    title: {
      fontSize: "70px",
    },
    message: {
    },
  });

  return (
    <View className="aboutContainer" style={styles.container}>
      <View className="content" style={styles.content}>
        <Text style={[GlobalStyle.generic, styles.title]}>Contact Me</Text>
        <Text style={[GlobalStyle.generic, styles.message]}>
          Feel free to contact me to gonzalo.santacruzm@gmail.com. You can
          follow me in my social media too!
        </Text>
      </View>
    </View>
  );
}
