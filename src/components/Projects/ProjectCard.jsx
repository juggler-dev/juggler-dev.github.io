import Tag from "./Tag";

export default function ProjectCard({
  projectTitle,
  projectContent,
  projectImageUrl,
  tags,
}) {

  const styles = {
    container: {
      flexDirection: "row",
      gap: '10px',
      border: "1px solid grey",
      borderRadius: "16px",
    },
    projectImage: {
      width: '300px',
      height: '300px',
      borderRadius: "16px",
    },
    backgroundImage: {
      borderTopLeftRadius: "16px",
      borderBottomLeftRadius: "16px",
    },
    content: {
      flex: 1,
      flexDirection: "column",
      paddingVertical: '10px',
      paddingHorizontal: '15px',
      gap: '10px',
    },
    tagsContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: 'wrap',
      rowGap: '5px'
    },
    title: {
      fontSize: "36px",
      color: "white",
    },
    description: {
      fontSize: '14px',
      textAlign: 'justify',
    },
  };

  return (
    <div className="projectCardContainer" style={styles.container}>
      {/* <img
        source={projectImageUrl}
        resizeMode="cover"
        style={styles.projectImage}
        imageStyle={styles.backgroundImage}
      > */}
      <div className="tagsDescriptionContainer" style={styles.content}>
        <p style={styles.title}>{projectTitle}</p>
        <div className="TagsContainer" style={styles.tagsContainer}>
          {tags.map((tag) => {
            return <Tag key={tag.tagName} content={tag.tagName} color={tag.tagColor} />;
          })}
        </div>
        <p style={styles.description}>{projectContent}</p>
      </div>
    </div>
  );
}
