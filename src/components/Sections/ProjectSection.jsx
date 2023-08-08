import SectionHeader from "./SectionHeader";
import ProjectCard from "../Projects/ProjectCard";

export default function ProjectSection({ name, sectionContent }) {
  const styles = {
    container: {},
    cardsContainer: {
      display: "flex",
      flexDirection: "row",
      padding: '100px 50px',
      gap: '20px',
    },
    columnContainer: {
      display: 'flex',
      flex: "1",
      flexDirection: 'column',
      gap: "20px",
    },
  };

  //Data rework
  const sectionContentData = sectionContent.map((project) => {
    return (
      <ProjectCard
        key={project.projectTitle}
        projectTitle={project.projectTitle}
        projectContent={project.projectContent}
        projectImageUrl={project.projectImageUrl}
        tags={project.tags}
        redirects={project.redirects}
      />
    );
  });

  //Data Split
  const midIndex = Math.ceil(sectionContentData.length / 2);
  const firstHalf = sectionContentData.slice(0, midIndex);
  const secondHalf = sectionContentData.slice(midIndex);

  return (
    <section style={styles.container}>
      <SectionHeader title={name} />
      <div style={styles.cardsContainer}>
        <div style={styles.columnContainer}>{firstHalf}</div>
        <div style={styles.columnContainer}>{secondHalf}</div>
      </div>
    </section>
  );
}
