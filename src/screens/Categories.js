import { StyleSheet, FlatList } from "react-native";

import SafeArea from "../components/SafeArea";
import CategoryTile from "../components/CategoryTile";
import categories from "../data/categories";

export default function Categories({ navigation }) {
  const pressHandler = (id) => navigation.navigate("meals", { categoryId: id });

  return (
    <SafeArea>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryTile {...item} onPress={() => pressHandler(item.id)} />
        )}
        numColumns={2}
        style={styles.container}
        contentContainerStyle={styles.rowsContainer}
        columnWrapperStyle={styles.columnsContainer}
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
    gap: 16,
  },
  columnsContainer: {
    justifyContent: "space-between",
  },
});
