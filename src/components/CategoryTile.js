import { StyleSheet, Pressable, Text } from "react-native";

import colors from "../constants/colors";

export default function CategoryTile({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightgray,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.black,
  },
  pressed: {
    opacity: 0.8,
  },
});
