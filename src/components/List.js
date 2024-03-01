import { StyleSheet, View, Text } from "react-native";

import colors from "../constants/colors";

export default function List({ title, items, containerStyle }) {
  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{title}</Text>

      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "600",
    padding: 8,
    textAlign: "center",
  },
  item: {
    backgroundColor: colors.lightgray,
    marginVertical: 6,
    padding: 8,
    borderRadius: 6,
  },
  itemText: {
    color: colors.black,
    textAlign: "center",
  },
});
