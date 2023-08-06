import { StyleSheet, View } from "react-native-web";

import SectionHeader from "./SectionHeader";
import ProjectCard from "../Projects/ProjectCard";

export default function ProjectSection({ name, sectionContent }) {
  const styles = StyleSheet.create({
    container: {
    },
    cardsContainer: {
      display: "flex",
      flexDirection: "row",
      paddingVertical: "100px",
      paddingHorizontal: "50px",
      gap: "20px",
    },
    columnContainer: {
      flex: "1",
      gap: "20px",
    },
  });

  //Data rework
  const sectionContentData = sectionContent.map((project) => {
    return (
      <ProjectCard
        projectTitle={project.projectTitle}
        projectContent={project.projectContent}
        projectImageUrl={project.projectImageUrl}
        tags={project.tags}
      />
    );
  });

  //Data Split
  const midIndex = Math.ceil(sectionContentData.length / 2);
  const firstHalf = sectionContentData.slice(0, midIndex);
  const secondHalf = sectionContentData.slice(midIndex);

  return (
    <View style={styles.container}>
      <SectionHeader title={name} />
      <View style={styles.cardsContainer}>
        <View style={styles.columnContainer}>{firstHalf}</View>
        <View style={styles.columnContainer}>{secondHalf}</View>
      </View>
    </View>
  );
}
