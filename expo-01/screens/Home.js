import React, { useState, useReducer } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { DATA } from "../components/data";
import { Item } from "../components/Item";
import { EmptyList } from "../components/EmptyList";

// const { width, height, scale, fontScale } = Dimensions.get("window");

const reducer = (state, action) => {
  if (action.type === "add") {
    console.log("payload = ", action.payload);
    return [...state, { id: uuidv4(), title: action.payload }];
  }
  throw Error("Unknown action.");
};

export const Home = () => {
  const insets = useSafeAreaInsets();
  const [text, onChangeText] = React.useState("");
  const [state, dispatch] = useReducer(reducer, DATA);

  // console.log("width", width);
  // console.log("height", height);
  // console.log("scale", scale);
  // console.log("fontScale", fontScale);
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.entradaDados}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Descrição da tarefa"
        />
        <Button
          title="Adicionar"
          onPress={() => {
            console.log("text", text);
            dispatch({ type: "add", payload: text });
          }}
        />
      </View>
      <FlatList
        data={state}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyList />}
      />
      <View style={styles.barraStatus}>
        <Text>5 tarefas</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  entradaDados: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  barraStatus: {
    alignItems: "flex-end",
  },
});
