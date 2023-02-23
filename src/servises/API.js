import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=b32595c5d75e5524988e9c730dd65515';

export const API = {

  
  async fetchTrendingMovies() {
    const response = await axios(
      `${BASE_URL}/trending/all/week?${API_KEY}`
    );
    return response.data;
  },

  async fetchMovieById(movieId) {
    const response = await axios(
      `${BASE_URL}/movie/${movieId}?${API_KEY}`
    );
    return response.data;
  },

  async fetchSearchMovie(searhMovie) {
    const response = await axios(
      `${BASE_URL}/search/movie?query=${searhMovie}&${API_KEY}&page=1`
    );
    return response.data.results;
  },

  async fetchActorsCredits(movieId) {
    const response = await axios(
      `${BASE_URL}/movie/${movieId}/credits?${API_KEY}`
    );
    return response.data.cast;
  },

  async fetchMovieReviews(movieId) {
    const response = await axios(
      `${BASE_URL}/movie/${movieId}/reviews?${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  },
};
