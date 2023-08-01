import { StyleSheet, View, Text, Image } from "react-native";

export default function AboutSection({ globalStyles }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "white",
    },
    imageTextContainer: {
      flex: 1,
      flexDirection: "row",
      paddingVertical: 50,
      paddingHorizontal: 50,
      gap: 50,
      width: "80%",
    },
    content: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      fontSize: "16px",
    },
    title: {
      fontSize: "70px",
      alignSelf: "flex-start",
    },
    message: {
      fontSize: "20px",
      textAlign: "justify",
    },
  });

  return (
    <View className="aboutContainer" style={styles.container}>
      <View style={styles.imageTextContainer}>
        <Image
          source={require("../../../assets/photos/diego_portfolio_portrait.jpg")}
          style={{ width: "480px", height: "350px", borderRadius: 16 }}
        ></Image>
        <View className="content" style={styles.content}>
          <Text style={[globalStyles, styles.title]}>Hello there!</Text>
          <Text style={[globalStyles, styles.message]}>
            Hello! I'm Diego, a fullstack developer and game designer/programmer
            from Peru. I'm currently seeking job opportunities and I'd like to
            showcase my work to you. I graduated with distinction from Langara
            College's Web and Mobile App Design and Development program. In my
            portfolio, you can explore some of the web and game projects I have
            worked on, both individually and as part of a team. I am a
            self-taught individual who constantly grows by experimenting and
            learning from various projects. I value clean and simple code as
            well as well-defined projects. If you have any questions or
            comments, please feel free to contact me. You can find my resume
            available here.
          </Text>
        </View>
      </View>
    </View>
  );
}
