import axios from 'axios';

const API_KEY = '99eb21030dfb3afeff4792ddc8f57a63';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default class MovieDatabase {
  #searchResult = [];

  constructor() {
    this.genres = null;
    this.#setGenres();
  }

  async getTrending(page) {
    const URL = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${page}&include_adult=false`;
    const data = await this.#axiosGet(URL);
    if (data) {
      this.#updateGenres(data);
    }
    this.#searchResult = data.results;
    this.#addTrailerToResults();
    return data;
  }

  async getMovie(movieID) {
    const URL = `${BASE_URL}movie/${movieID}?api_key=${API_KEY}`;
    return await this.#axiosGet(URL);
  }

  async getMovieCredits(movieID) {
    const URL = `${BASE_URL}movie/${movieID}/credits?api_key=${API_KEY}`;
    return await this.#axiosGet(URL);
  }

  async getMovieReviews(movieID) {
    const URL = `${BASE_URL}movie/${movieID}/reviews?api_key=${API_KEY}`;
    return await this.#axiosGet(URL);
  }

  async getTrailers(movieID) {
    const URL = `${BASE_URL}movie/${movieID}/videos?api_key=${API_KEY}`;
    return await this.#axiosGet(URL);
  }

  async searchMovie(query, page = 1) {
    const URL = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}&include_adult=false`;
    const data = await this.#axiosGet(URL);
    if (!!data) {
      this.#updateGenres(data);
    }
    this.#searchResult = data.results;
    this.#addTrailerToResults();
    return data;
  }

  async #setGenres() {
    const URL = `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
    const result = await this.#axiosGet(URL);
    this.genres = result.genres;
  }

  #updateGenres(data) {
    for (const film of data.results) {
      film.genres = [];
      for (const genreId of film.genre_ids) {
        const genre = this.genres.find(element => element.id === genreId);
        film.genres.push({ id: genre.id, name: genre.name });
      }
    }
  }

  async #addTrailerToResults() {
    for (const film of this.#searchResult) {
      const { results } = await this.getTrailers(film.id);
      film.trailer = results.find(element => element.type === 'Trailer');
    }
  }

  async #axiosGet(URL) {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  getFilmFromResults(movieID) {
    return this.#searchResult.find(element => element.id === movieID);
  }

  get searchResult() {
    return this.searchResult;
  }

  set searchResult(newResult) {
    return;
  }
}
