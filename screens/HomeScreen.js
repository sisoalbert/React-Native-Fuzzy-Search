import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Fuse from "fuse.js";

const Data = [
  {
    color: "red",
    value: "#f00",
  },
  {
    color: "green",
    value: "#0f0",
  },
  {
    color: "blue",
    value: "#00f",
  },
  {
    color: "cyan",
    value: "#0ff",
  },
  {
    color: "magenta",
    value: "#f0f",
  },
  {
    color: "yellow",
    value: "#ff0",
  },
  {
    color: "black",
    value: "#000",
  },
];

const HomeScreen = () => {
  const [text, onChangeText] = React.useState("");
  const [selectedItem, SetSelectedItem] = React.useState(null);

  const fuse = new Fuse(Data, {
    keys: ["color", "value"],
  });

  const results = fuse.search(text);
  //   console.log(results);
  //   console.log(Fuse);

  //   console.log(selectedItem);

  return (
    <View style={{ paddingTop: 20 }}>
      <View>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
          onChangeText={onChangeText}
          value={text}
          placeholder="useless placeholder"
        />
      </View>
      <View>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
          onChangeText={onChangeText}
          value={text}
          placeholder="useless placeholder"
        />
      </View>

      <FlatList
        data={results}
        renderItem={({ item }) => {
          const handlePress = () => {
            SetSelectedItem(item.item.value);
            onChangeText(item.item.color);
          };

          return (
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                backgroundColor: "#f9c2ff",
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
              }}
              onPress={handlePress}
            >
              <Text>{item.item.color}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.item.value}
      />
      <View>
        <Text>fuse</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
