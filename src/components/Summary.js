import { StyleSheet, Image, View, Text } from "react-native";

import colors from "../constants/colors";

export default function Summary({
  image,
  title,
  duration,
  complexity,
  affordability,
  imageStyle,
  titleStyle,
}) {
  return (
    <>
      <Image
        style={[styles.image, imageStyle]}
        resizeMode="cover"
        source={{ uri: image }}
      />

      <View style={styles.descriptionsContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>

        <View style={styles.shortDescriptions}>
          <Text style={styles.shortDescription}>{duration}m</Text>
          <Text style={styles.shortDescription}>{complexity}</Text>
          <Text style={styles.shortDescription}>{affordability}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  descriptionsContainer: {
    padding: 20,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  shortDescriptions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  shortDescription: {
    color: colors.darkgray,
    fontSize: 15,
    marginHorizontal: 8,
  },
});
