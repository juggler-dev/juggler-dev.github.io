import { StyleSheet } from "react-native";
import { Text } from "react-native-web";

import GlobalStyle from "../../utils/GlobalStyle";

export default function SectionHeader({ title }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(25, 25, 25, 0.95)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: "50px",
      color: "white",
    },
  });

  return (
    <div className="sectionHeaderContainer" style={styles.container}>
      <Text className="sectionHeaderTitle" style={[GlobalStyle.generic, styles.title]}>
        {title}
      </Text>
    </div>
  );
}
