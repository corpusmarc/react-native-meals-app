import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SafeArea({ children }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
}
