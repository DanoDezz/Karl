import axios from 'axios';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (page = 1) => {
  const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
    params: {
      api_key: TMDB_API_KEY,
      page,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
    params: {
      api_key: TMDB_API_KEY,
    },
  });
  return response.data;
};

export const fetchTVDetails = async (id) => {
  const response = await axios.get(`${TMDB_BASE_URL}/tv/${id}`, {
    params: {
      api_key: TMDB_API_KEY,
    },
  });
  return response.data;
};