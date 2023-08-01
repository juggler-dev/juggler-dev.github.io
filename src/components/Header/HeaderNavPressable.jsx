import { Pressable, StyleSheet, Text } from "react-native-web";

import GlobalStyle from "../../utils/GlobalStyle";

export default function HeaderNavPressable({ pressableLabel }) {
  const styles = StyleSheet.create({
    headerNavPressable: {
      textTransform: "uppercase",
    },
  });

  return (
    <Pressable>
      <Text style={[GlobalStyle.generic, styles.headerNavPressable]}>{pressableLabel}</Text>
    </Pressable>
  );
}
