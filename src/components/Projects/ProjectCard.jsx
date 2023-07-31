import { StyleSheet } from "react-native";
import { View, Text, ImageBackground } from "react-native-web";

import Tag from "./Tag";

export default function ProjectCard({ projectTitle, projectContent, projectImageUrl, tags }) {
  const imageUrl = { uri: projectImageUrl };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      gap: 20,
      border: "1px solid grey",
      borderRadius: "16px",
    },
    projectImage: {
      width: "300px",
      height: "300px",
      borderRadius: "16px",
    },
    backgroundImage: {
      borderTopLeftRadius: "16px",
      borderBottomLeftRadius: "16px",
    },
    tagsDescriptionContainer: {
      flex: 1,
      flexDirection: "column",
      padding: "20px",
    },
    tagsContainer: {
      display: "flex",
      flexDirection: "row",
    },
    text: {
      flex: 1,
    },
  });

  return (
    <View className="projectCardContainer" style={styles.container}>
      <ImageBackground
        source={imageUrl}
        resizeMode="cover"
        style={styles.projectImage}
        imageStyle={styles.backgroundImage}
      ></ImageBackground>
      <View
        className="tagsDescriptionContainer"
        style={styles.tagsDescriptionContainer}
      >
        <Text>
          {projectTitle}
        </Text>
        <View className="TagsContainer" style={styles.tagsContainer}>
          {tags.map(x => {
            return <Tag content={x.tagName} color={x.tagColor} />  
          })}

        </View>
        <Text style={{ fontSize: "16px", color: "white" }}>
          {projectContent}
        </Text>
      </View>
    </View>
  );
}
