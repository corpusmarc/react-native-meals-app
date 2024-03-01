import { useLayoutEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import SafeArea from "../components/SafeArea";
import MealItem from "../components/MealItem";
import categories from "../data/categories";
import meals from "../data/meals";

export default function Meals({ route, navigation }) {
  useLayoutEffect(() => {
    setTitle();
  }, []);

  const categoryId = route.params.categoryId;

  const setTitle = () => {
    const c = categories.find((c) => c.id === categoryId);

    navigation.setOptions({
      title: c.title,
    });
  };

  const mealsData = meals.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const pressHandler = (id) =>
    navigation.navigate("meal-details", { mealId: id });

  return (
    <SafeArea>
      <FlatList
        data={mealsData}
        renderItem={({ item }) => (
          <MealItem {...item} onPress={() => pressHandler(item.id)} />
        )}
        style={styles.container}
        contentContainerStyle={styles.rowsContainer}
      />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginTop: 12,
  },
  rowsContainer: {
    gap: 24,
  },
});
