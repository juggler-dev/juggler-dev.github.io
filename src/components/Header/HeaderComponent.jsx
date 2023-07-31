import { Pressable, StyleSheet, Text, View } from "react-native";

function HeaderNavPressable({ pressableLabel }) {
  return (
    <Pressable>
      <Text style={styles.headerNavPressable}>{pressableLabel}</Text>
    </Pressable>
  );
}

export default function HeaderComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Diego Santa Cruz</Text>
      <HeaderNavPressable pressableLabel={"About"} />
      <HeaderNavPressable pressableLabel={"Gaming Projects"} />
      <HeaderNavPressable pressableLabel={"Web Development Projects"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "rgba(25, 25, 25, 0.8)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
  },
  nameText: {
    color: "dodgerblue",
    fontSize: 36,
    textTransform: "uppercase",
  },
  headerNavPressable: {
    color: "dodgerblue",
    textTransform: "uppercase",
  }
});
