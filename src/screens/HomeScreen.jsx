import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import HeaderComponent from "../components/Header/HeaderComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";

import ProjectSection from "../components/Sections/ProjectSection";
import SectionHeader from "../components/Sections/SectionHeader";

import { webProjects } from "../content/webProjects";

export default function HomeScreen() {
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
        <About />
        <ProjectSection name="Web projects" sectionContent={webProjects}/>
        {/* <ProjectSection name="Game projects"/>
        <ProjectSection name="DIY projects"/> */}
        <Contact />
      </View>
      <FooterComponent />
    </View>
  );
}
