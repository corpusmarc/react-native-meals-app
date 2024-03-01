import { StyleSheet, Image, Text, View, Pressable } from "react-native";

import Card from "./Card";
import colors from "../constants/colors";

export default function MealItem({
  imageUrl,
  title,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <Pressable onPress={onPress}>
      <Card>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: imageUrl }}
        />

        <View style={styles.descriptionsContainer}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.descriptions}>
            <Text style={styles.description}>{duration}m</Text>
            <Text style={styles.description}>{complexity}</Text>
            <Text style={styles.description}>{affordability}</Text>
          </View>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  descriptionsContainer: {
    padding: 20,
    gap: 8,
  },
  descriptions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  description: {
    color: colors.darkgray,
    fontSize: 15,
    marginHorizontal: 8,
  },
});
