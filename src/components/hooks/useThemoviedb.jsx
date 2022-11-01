import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const API_KEY = '99eb21030dfb3afeff4792ddc8f57a63';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default function useThemoviedb() {
  const [apiData, setApiData] = useState(null);
  // const [query, setQuery] = useState(null);
  // const [page, setPage] = useState(1);

  const genres = useMemo(async () => {
    const URL = `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
    const result = await axios.get(URL);
    return result.data.genres;
  }, []);

  const getTrending = async page => {
    const result = await axios.get('/trending/movie/week', {
      params: {
        api_key: API_KEY,
        page,
      },
    });
    if (result) {
      updateGenres(result.data, await genres);
    }
    setApiData(result.data);
  };

  const updateGenres = (data, genres) => {
    if (!genres) return;

    for (const film of data.results) {
      film.genres = [];
      for (const genreId of film.genre_ids) {
        const genre = genres.find(element => element.id === genreId);
        film.genres.push({ id: genre.id, name: genre.name });
      }
    }
  };

  return { apiData, getTrending };
}
