import { View, Text, StyleSheet } from "react-native-web";

import GlobalStyle from "../../utils/GlobalStyle";

import { tagColorCheck } from "../../utils/utils";

export default function Tag({ content, color }) {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      backgroundColor: tagColorCheck(color),
      padding: 5,
      marginHorizontal: 5,
      borderRadius: "8px",
    },
    text: {
      fontSize: '14px'
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[GlobalStyle.generic, styles.text]}>{content}</Text>
    </View>
  );
}
