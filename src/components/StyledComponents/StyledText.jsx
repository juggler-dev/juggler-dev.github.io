import { useFonts } from "expo-font";
import { Text } from "react-native-web";

export default function StyledText() {
  const [fontsLoaded] = useFonts({
    "Quicksand-regular": require("./assets/fonts/Quicksand-Regular.ttf"),
  });
  return (
    <Text style={{ fontFamily: "Quicksand-regular", fontSize: 30 }}>Inter Black</Text>
  );
}