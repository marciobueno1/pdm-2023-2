import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { diceFaces } from "../images.js";
import { useStore } from "../zustand";

const rodarDado = () => {
  return Math.floor(Math.random() * 6) + 1;
};

export function HomeScreen({ navigation }) {
  const addScore = useStore((state) => state.addScore);

  const [dado1, setDado1] = useState(0);
  const [dado2, setDado2] = useState(0);
  const [resultado, setResultado] = useState("");

  const jogarDados = () => {
    setDado1(rodarDado());
    setDado2(rodarDado());
  };

  useEffect(() => {
    const date = new Date();
    const result =
      dado1 + dado2 === 7 || dado1 + dado2 == 11 ? "ganhou" : "perdeu";
    setResultado(result);
    addScore({ date, result });
  }, [dado1, dado2]);

  return (
    <View style={styles.container}>
      <View style={styles.dadosContainer}>
        <Image
          style={[styles.dado, { marginEnd: 20 }]}
          source={diceFaces[dado1]}
        />
        <Image style={styles.dado} source={diceFaces[dado2]} />
      </View>
      <Button title="Jogar Dados" onPress={jogarDados} />
      {dado1 != 0 && dado2 != 0 && <Text style={styles.text}>{resultado}</Text>}
      <Button title="Histórico" onPress={() => navigation.navigate("Score")} />
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
    padding: 5,
  },
  text: {
    fontSize: 50,
    marginTop: 50,
  },
  dadosContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  dado: {
    width: 150,
    height: 150,
  },
});