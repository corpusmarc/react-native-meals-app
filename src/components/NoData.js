import { StyleSheet, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import colors from "../constants/colors";

export default function NoData() {
  return (
    <View style={styles.container}>
      <FontAwesome name="ban" size={60} color={colors.lightgray} />
      <Text style={styles.text}>No Data Available</Text>
      <Text style={styles.subtext}>
        There is no data to show you right now.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.darkgray,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
  },
  subtext: {
    color: colors.lightgray,
    fontSize: 16,
    marginTop: 4,
  },
});
