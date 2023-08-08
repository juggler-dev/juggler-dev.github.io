import GlobalStyle from "../utils/GlobalStyle";

import HeaderComponent from "../components/Header/HeaderComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import Hero from "../components/Sections/Hero";
import Contact from "../components/Sections/Contact";

import ProjectSection from "../components/Sections/ProjectSection";

import WebProjects from "../content/webProjects";
import GameProjects from "../content/gameProjects";
import DIYProjects from "../content/diyProjects";

export default function HomeScreen() {
  const styles = {
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
  };

  return (
    <div style={styles.container}>
      <HeaderComponent globalstyles={GlobalStyle.generic} />
      <div style={styles.content}>
        <Hero />
        <ProjectSection name="Web projects" sectionContent={WebProjects} />
        <ProjectSection name="Game projects" sectionContent={GameProjects} />
        <ProjectSection name="DIY projects" sectionContent={DIYProjects} />
        {/* <Contact globalStyles={GlobalStyle.generic} /> */}
      </div>
      <FooterComponent />
    </div>
  );
}
