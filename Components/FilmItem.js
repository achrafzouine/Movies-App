import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import getImageFilmFromApi from "./tmdb/ImagesApi";

const FilmItem = ({ navigation, route }) => {
  const [searchFilm, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const api_key = "c3c0925926a09679783d96c814420fd8";

  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    api_key +
    "&query=" +
    navigation.getParam("params");
  useEffect(() => {
    fetch(url)
      .then((results) => results.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setloading(false));
  }, []);

  const Search = () => {
    if (searchFilm.length > 0) {
      setData([]);
    }
  };

  return (
    <View>
      {loading ? (
        <Text>loading...</Text>
      ) : (
        <View style={styles.container}>
          <View>
            <FlatList
              data={data}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.flatlist}
                  onPress={() => navigation.navigate("Details", item)}
                >
                  <Image
                    style={styles.image}
                    source={{ uri: getImageFilmFromApi(item.poster_path) }}
                  />
                  <View style={styles.content_container}>
                    <View style={styles.header_container}>
                      <Text style={styles.title_text}>{item.title}</Text>
                      <Text style={styles.vote_text}>{item.vote_average}</Text>
                    </View>

                    <View style={styles.description_container}>
                      <Text style={styles.description_text} numberOfLines={6}>
                        {item.overview}
                      </Text>
                    </View>
                    <View style={styles.date_container}>
                      <Text style={styles.date_text}>
                        Sorti le : {item.release_date}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            ></FlatList>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  search: {
    padding: 9,
    flex: 3,
    flexDirection: "column",
  },

  button: {
    paddingHorizontal: 70,
  },

  flatlist: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "#edeff2",
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: "row",
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 19,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5,
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#666666",
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
  },
  date_container: {
    flex: 1,
  },
  date_text: {
    textAlign: "right",
    fontSize: 14,
  },
});

export default FilmItem;
