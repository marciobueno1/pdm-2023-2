import { StyleSheet, Text } from "react-native";

export const ScoreHeader = ({ title }) => (
  <Text style={styles.header}>{title}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
});
