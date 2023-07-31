import { StyleSheet, Text, View } from "react-native";

import { useFonts } from "expo-font";

import HeaderNavPressable from "./HeaderNavPressable";

import GlobalStyle from "../../utils/GlobalStyle";


export default function HeaderComponent() {
  const [fontsLoaded] = useFonts({
    "Quicksand-regular": require("../../../assets/fonts/Quicksand-Regular.ttf"),
  });

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
      fontSize: '36px',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[GlobalStyle.siteHeader, styles.nameText]}>Diego Santa Cruz</Text>
      <HeaderNavPressable pressableLabel={"About"} globalStyles={GlobalStyle.siteHeader}/>
      <HeaderNavPressable pressableLabel={"Gaming Projects"} globalStyles={GlobalStyle.siteHeader}/>
      <HeaderNavPressable pressableLabel={"Web Development Projects"} globalStyles={GlobalStyle.siteHeader}/>
    </View>
  );
}
