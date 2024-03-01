import { StyleSheet, Pressable } from "react-native";

import Card from "./Card";
import Summary from "./Summary";

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
        <Summary
          image={imageUrl}
          title={title}
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          imageStyle={styles.image}
        />
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
