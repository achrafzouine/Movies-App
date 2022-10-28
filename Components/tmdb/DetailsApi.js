const api_key = "301637d4bceb1848b23cc020e996e517";
export default function getDetailFilmFromApi(id) {
  const url =
    "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key;
  return fetch(url)
    .then((results) => results.json())
    .catch((error) => console.error(error));
}
