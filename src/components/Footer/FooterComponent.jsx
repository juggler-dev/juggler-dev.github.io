import { StyleSheet, Text, View } from "react-native";

export default function FooterComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Copyright © 2023 by Diego Santa Cruz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#252525',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'dodgerblue',
  }
});
