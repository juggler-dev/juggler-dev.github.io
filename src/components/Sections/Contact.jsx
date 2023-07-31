import { StyleSheet, View, Text } from "react-native";

export default function Contact() {
  return (
    <View className="aboutContainer" style={styles.container}>
      <View className="content" style={styles.content}>
        <Text style={styles.title}>Contact Me</Text>
        <Text style={styles.message}>
          Feel free to contact me to gonzalo.santacruzm@gmail.com. You can follow me in my social media too!
        </Text>
      </View>
    </View>
  );
}

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
    fontSize: "16px",
  },
  title: {
    fontSize: "70px",
    color: "white"
  },
  message: {
    fontSize: "16px",
    color: "white"
  }
});
