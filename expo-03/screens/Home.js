import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useStore } from "../zustand";

export function HomeScreen() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{bears}</Text>
      <Button title="Incrementar" onPress={increasePopulation} />
      <Button title="Zerar" onPress={removeAllBears} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
  },
});
