import { StyleSheet, View, Dimensions } from "react-native-web";

import GlobalStyle from "../../utils/GlobalStyle";

import SectionHeader from "./SectionHeader";
import ProjectCard from "../Projects/ProjectCard";

export default function ProjectSection({ name, sectionContent }) {
  const styles = StyleSheet.create({
    cardsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 20,
    },
    cardsContent: {
      display: "flex",
      maxWidth: "60%",
      gap: 20,
    },
  });

  return (
    <View>
      <SectionHeader title={name} />
      <View style={styles.cardsContainer}>
        <View style={styles.cardsContent}>
          {sectionContent.map((project) => {
            return (
              <ProjectCard
                projectTitle={project.projectTitle}
                projectContent={project.projectContent}
                projectImageUrl={project.projectImageUrl}
                tags={project.tags}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}
