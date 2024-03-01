import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

import Categories from "./src/screens/Categories";
import Meals from "./src/screens/Meals";
import MealDetails from "./src/screens/MealDetails";
import Favorites from "./src/screens/Favorites";

import colors from "./src/constants/colors";

const NativeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: colors.black,
        drawerActiveTintColor: colors.white,
        drawerInactiveBackgroundColor: colors.white,
        drawerInactiveTintColor: colors.black,
        headerTintColor: colors.black,
      }}
    >
      <Drawer.Screen
        name="categories"
        component={Categories}
        options={{
          title: "Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="favorites"
        component={Favorites}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator screenOptions={{ headerTintColor: colors.black }}>
        <NativeStack.Screen
          name="drawer-navigator"
          component={DrawerNavigator}
          options={{ headerShown: false, title: "Categories" }}
        />
        <NativeStack.Screen name="meals" component={Meals} />
        <NativeStack.Screen
          name="meal-details"
          component={MealDetails}
          options={{
            title: "About the Meal",
            headerRight: ({ color, size }) => (
              <Ionicons name="star" color={color} size={20} />
            ),
          }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
