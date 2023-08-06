import { StyleSheet } from "react-native";
import { View, Text, ImageBackground } from "react-native-web";

import GlobalStyle from "../../utils/GlobalStyle";

import Tag from "./Tag";

export default function ProjectCard({
  projectTitle,
  projectContent,
  projectImageUrl,
  tags,
}) {

  const styles = StyleSheet.create({
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
  });

  return (
    <View className="projectCardContainer" style={styles.container}>
      <ImageBackground
        source={projectImageUrl}
        resizeMode="cover"
        style={styles.projectImage}
        imageStyle={styles.backgroundImage}
      ></ImageBackground>
      <View className="tagsDescriptionContainer" style={styles.content}>
        <Text style={[GlobalStyle.generic, styles.title]}>{projectTitle}</Text>
        <View className="TagsContainer" style={styles.tagsContainer}>
          {tags.map((tag) => {
            return <Tag content={tag.tagName} color={tag.tagColor} />;
          })}
        </View>
        <Text style={[GlobalStyle.generic, styles.description]}>{projectContent}</Text>
      </View>
    </View>
  );
}
