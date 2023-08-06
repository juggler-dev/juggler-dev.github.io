import { View, Text, StyleSheet } from "react-native-web";

import GlobalStyle from "../../utils/GlobalStyle";

export default function SectionHeader({ title }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(25, 25, 25, 0.95)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderTopWidth: '1px',
      borderTopColor: 'white',
      borderBottomWidth: '1px',
      borderBottomColor: 'white',
    },
    title: {
      paddingVertical: "20px",
      fontSize: "50px",
    },
  });

  return (
    <View className="sectionHeaderContainer" style={styles.container}>
      <Text
        className="sectionHeaderTitle"
        style={[GlobalStyle.generic, styles.title]}
      >
        {title}
      </Text>
    </View>
  );
}
