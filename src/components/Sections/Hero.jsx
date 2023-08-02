import { ImageBackground, StyleSheet, Text, View } from "react-native-web";

import GlobalStyle from "../../utils/GlobalStyle";

export default function Hero() {
  const styles = StyleSheet.create({
    container: {
      height: "900px",
    },
    heroImage: {
      flex: "1",
      borderRadius: "16px",
      flexDirection: "row",
    },
    columnContainer: {
      flex: "1",
      flexDirection: "column",
    },
    textContainer: {
      paddingRight: "100px",
      gap: "20px",
      justifyContent: "center",
    },
    heroSectionTitle: {
      fontSize: "72px",
    },
    heroSectionMessage: {
      fontSize: "24px",
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/hero/heroSectionImage_dark.jpg")}
        resizeMode="cover"
        style={styles.heroImage}
      >
        <View style={styles.columnContainer}></View>
        <View style={[styles.columnContainer, styles.textContainer]}>
          <Text style={[GlobalStyle.generic, styles.heroSectionTitle]}>
            Hello there!
          </Text>
          <Text style={[GlobalStyle.generic, styles.heroSectionMessage]}>
            Hi! I'm Diego, a fullstack developer and game designer/programmer
            from Peru. In my portfolio, you can explore some of the web and game
            projects I have worked on, both individually and as part of a
            team.If you have any questions or comments, please feel free to
            contact me. You can find my resume available here.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
