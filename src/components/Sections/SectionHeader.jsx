import { StyleSheet } from "react-native";
import { Text } from "react-native-web";

export default function SectionHeader({ title }) {
  return (
    <div className="sectionHeaderContainer" style={styles.container}>
      <Text className="sectionHeaderTitle" style={styles.title}>{title}</Text>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252525",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "50px",
    color: "white",
  },
});
