import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const Search = ({ navigation, route }) => {
  const [searchFilm, setSearch] = useState("");

  const pressHandler = () => {
    navigation.navigate("Film", { params: searchFilm });
  };

  return (
    <View style={styles.search}>
      <TextInput
        style={styles.textinput}
        value={searchFilm}
        placeholder="Rechercher film"
        onChangeText={(text) => setSearch(text)}
      ></TextInput>
      <View style={styles.button}>
        <Button title="Rechercher" onPress={pressHandler}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 9,
    flex: 3,
    flexDirection: "column",
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },

  button: {
    paddingHorizontal: 70,
  },
});

export default Search;
