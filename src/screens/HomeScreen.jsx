import { StyleSheet, View } from "react-native";

import { useFonts } from "expo-font";

import GlobalStyle from "../utils/GlobalStyle";

import HeaderComponent from "../components/Header/HeaderComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import AboutSection from "../components/Sections/AboutSection";
import Contact from "../components/Sections/Contact";

import ProjectSection from "../components/Sections/ProjectSection";

import { webProjects } from "../content/webProjects";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Quicksand-regular": require("../../assets/fonts/Quicksand-Regular.ttf"),
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      backgroundColor: "#393939",
    },
    contentText: {
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <HeaderComponent />
      <View style={styles.content}>
        <AboutSection globalStyles={GlobalStyle.body} />
        <ProjectSection name="Web projects" sectionContent={webProjects} />
        {/* <ProjectSection name="Game projects"/>
        <ProjectSection name="DIY projects"/> */}
        <Contact />
      </View>
      <FooterComponent />
    </View>
  );
}
