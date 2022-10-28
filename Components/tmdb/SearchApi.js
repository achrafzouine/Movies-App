const api_key = "301637d4bceb1848b23cc020e996e517";
// const api_key = "4f85664fd2642ccc516158923411b7d4";
//1. search
export default function getFilmFromApi(film) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    api_key +
    "&query=" +
    film;
  return fetch(url)
    .then((results) => results.json().results)
    .catch((error) => console.error(error));
}
