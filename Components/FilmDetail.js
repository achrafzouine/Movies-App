import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import getImageFilmFromApi from "./tmdb/ImagesApi";

const FilmDetail = ({ navigation }) => {
  const [data, setData] = useState([]);
  const api_key = "c3c0925926a09679783d96c814420fd8";

  const url =
    "https://api.themoviedb.org/3/movie/" +
    navigation.getParam("id") +
    "?api_key=" +
    api_key;

  useEffect(() => {
    fetch(url);
    fetch(url)
      .then((results) => results.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{ uri: getImageFilmFromApi(data.backdrop_path) }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{data.original_title}</Text>
      </View>
      <View style={styles.description_container}>
        <Text style={styles.description_text}>{data.overview}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>Sorti le : {data.release_date} </Text>
          <Text style={styles.infoText}>Revenue: {data.revenue} $</Text>
          <Text style={styles.infoText}>Budget: {data.budget} $</Text>
          <Text style={styles.infoText}>Runtime: {data.runtime}</Text>
          <Text style={styles.infoText}>Tagline: {data.tagline}</Text>
          <Text style={styles.infoText}>Vote average: {data.vote_average}</Text>
          <View>
            <Text style={styles.infoText}>
              Vote count: {navigation.getParam("id")}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageStyle: {
    flex: 0,
    margin: 8,
    padding: 100,
  },
  titleContainer: {
    flex: 1,
    marginVertical: 12,
  },

  description_container: {
    flex: 3,
    margin: 10,
  },

  titleText: {
    fontWeight: "bold",
    fontSize: 35,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center",
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
    margin: 5,
    marginBottom: 15,
  },
  textContainer: {
    marginVertical: 12,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
});

export default FilmDetail;
