import { StyleSheet, ScrollView, View } from "react-native";

import SafeArea from "../components/SafeArea";
import Summary from "../components/Summary";
import List from "../components/List";
import meals from "../data/meals";

export default function MealDetails({ route }) {
  const mealId = route.params.mealId;
  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = meals.find((meal) => meal.id === mealId);

  return (
    <SafeArea>
      <ScrollView>
        <Summary
          image={imageUrl}
          title={title}
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          imageStyle={styles.image}
          titleStyle={styles.title}
        />

        <List
          title="Ingredients"
          items={ingredients}
          containerStyle={styles.listContainer}
        />

        <View style={{ height: 16 }} />

        <List
          title="Steps"
          items={steps}
          containerStyle={styles.listContainer}
        />
      </ScrollView>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
  },
  title: {
    fontSize: 24,
  },
  listContainer: {
    marginHorizontal: 16,
  },
});
