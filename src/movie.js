import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const key =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGMzMGQxYzcyYmE1MGE1YTg0NWI4MWQ2YzZjYmZjOCIsIm5iZiI6MTcyMjUzMTczOS45NDc4NDksInN1YiI6IjY2YWJiZDdhYjI0YjNhZGE5NzVhMDY3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vmjcsUcd7mmLoBR70UYgWsx2rruIa2B6e6iNC2DUeLU";

async function fetchMovies() {
  const response = await axios.get("trending/movie/day", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });

  return response.data.results;
}

async function getMovieById(moviesId) {
  const responce = await axios.get(`movie/${moviesId}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return responce.data;
}
async function getFilerMovies(query) {
  const response = await axios.get(`search/movie?query=${query}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.data.results;
}

async function getMovieCast(id) {
  const response = await axios.get(`/movie/${id}/credits`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.data.cast;
}

async function getMovieReview(id) {
  const response = await axios.get(`/movie/${id}/reviews`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.data.results;
}

export { fetchMovies, getMovieById, getFilerMovies, getMovieReview, getMovieCast };
