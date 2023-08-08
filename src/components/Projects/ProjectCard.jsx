import { useState } from "react";

import Tag from "./Tag";
import RedirectButton from "../Generic/RedirectButton";

export default function ProjectCard({
  projectTitle,
  projectContent,
  projectImageUrl,
  tags,
  redirects,
}) {
  const [isHover, setIsHover] = useState(false);

  const mouseHoverHandler = () => {
    setIsHover(true);
  };
  const mouseNotHoverHandler = () => {
    setIsHover(false);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: isHover ? "dodgerblue" : "silver",
      borderRadius: "16px",
    },
    imageThumbnail: {
      width: "300px",
      height: "300px",
      borderTopLeftRadius: "16px",
      borderBottomLeftRadius: "16px",
    },
    content: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      padding: "10px 15px",
    },
    descriptionContainer: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      gap: "10px",
    },
    tagsContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "5px",
    },
    title: {
      fontSize: "36px",
    },
    description: {
      fontSize: "14px",
      textAlign: "justify",
    },
    redirectContainer: {
      display: "flex",
      height: "50px",
      alignItems: "center",
      justifyContent: "flex-end",
      columnGap: '10px'
    },
    redirectContent: {
      display: "flex",
      gap: '10px'
    }
  };

  return (
    <div
      className="projectCardContainer"
      style={styles.container}
      onMouseEnter={mouseHoverHandler}
      onMouseLeave={mouseNotHoverHandler}
    >
      <img src={projectImageUrl} style={styles.imageThumbnail} />
      <div className="cardContent" style={styles.content}>
        <div style={styles.descriptionContainer}>
          <p style={styles.title}>{projectTitle}</p>
          <div className="TagsContainer" style={styles.tagsContainer}>
            {tags.map((tag) => {
              return (
                <Tag
                  key={tag.tagName}
                  content={tag.tagName}
                  color={tag.tagColor}
                />
              );
            })}
          </div>
          <p style={styles.description}>{projectContent}</p>
        </div>
        <div
          className="redirectContainer"
          style={styles.redirectContainer}
        >
          {isHover && (
            <div className="redirectContent" style={styles.redirectContent}>
              {redirects?.map((redirectButton) => {
                return <RedirectButton linkURL={redirectButton.redirectURL} buttonText={redirectButton.buttonMessage} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
