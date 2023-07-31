import { StyleSheet, View, Dimensions } from "react-native-web";

import SectionHeader from "./SectionHeader";
import ProjectCard from "../Projects/ProjectCard";

export default function ProjectSection({ name, sectionContent }) {
  console.log(sectionContent);
  return (
    <View>
      <SectionHeader title={name} />
      <View style={styles.cardsContainer}>
        <View style={styles.cardsContent}>
          {sectionContent.map((x) => {
            return <ProjectCard projectTitle={x.projectTitle} projectContent={x.projectContent} projectImageUrl={x.projectImageUrl} tags={x.tags} />;
          })}
        </View>
      </View>
    </View>
  );
}
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
