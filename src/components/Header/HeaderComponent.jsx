import { StyleSheet, Text, View } from "react-native";

import HeaderNavPressable from "./HeaderNavPressable";

import GlobalStyle from "../../utils/GlobalStyle";


export default function HeaderComponent() {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(25, 25, 25, 0.95)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: '30px',
      paddingVertical: '10px',
      gap: '20px',
    },
    nameText: {
      fontSize: '36px',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[GlobalStyle.generic, styles.nameText]}>Diego Santa Cruz</Text>
      <HeaderNavPressable pressableLabel={"Gaming Projects"}/>
      <HeaderNavPressable pressableLabel={"Web Projects"}/>
      <HeaderNavPressable pressableLabel={"About"}/>
    </View>
  );
}
