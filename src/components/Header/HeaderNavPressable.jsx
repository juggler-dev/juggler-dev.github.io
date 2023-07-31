import { Pressable, StyleSheet, Text } from "react-native-web";

export default function HeaderNavPressable({ pressableLabel, globalStyles }) {
  const styles = StyleSheet.create({
    headerNavPressable: {
      color: "dodgerblue",
      textTransform: "uppercase",
    },
  });

  return (
    <Pressable>
      <Text style={[globalStyles, styles.headerNavPressable]}>{pressableLabel}</Text>
    </Pressable>
  );
}
