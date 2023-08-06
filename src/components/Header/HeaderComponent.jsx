import { StyleSheet, Text, View, Pressable } from "react-native";

import HeaderNavPressable from "./HeaderNavPressable";

import { Link } from "react-router-native";

import GlobalStyle from "../../utils/GlobalStyle";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons/faEarthAmericas";
import { faGamepad } from "@fortawesome/free-solid-svg-icons/faGamepad";

export default function HeaderComponent({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(25, 25, 25, 0.95)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: "30px",
      paddingVertical: "10px",
      gap: "40px",
      borderBottomWidth: "1px",
      borderBottomColor: "silver",
    },
    nameText: {
      fontSize: "36px",
    },
  });

  return (
    <View style={styles.container}>
      {/* <Pressable
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
        style={[GlobalStyle.generic, styles.nameText]}
      >
        Diego Santa Cruz
      </Pressable> */}
      <Link to='/'>
        <Text style={[GlobalStyle.generic, styles.nameText]}>
          Diego Santa Cruz
        </Text>
      </Link>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <FontAwesomeIcon icon={faGamepad} color="white" size="24px" />

          <HeaderNavPressable pressableLabel={"Gaming Projects"} />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <FontAwesomeIcon icon={faEarthAmericas} color="white" size="20px" />
          <HeaderNavPressable pressableLabel={"Web Projects"} />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <HeaderNavPressable pressableLabel={"About"} />
        </div>
      </div>
    </View>
  );
}
