import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const API_KEY = '99eb21030dfb3afeff4792ddc8f57a63';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default function useThemoviedb(mode = 'trends') {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);

  const genres = useMemo(async () => {
    const result = await axios.get('/genre/movie/list', {
      params: {
        api_key: API_KEY,
      },
    });

    return result.data.genres;
  }, []);

  useEffect(() => {
    if (mode === 'trends') {
      (async function () {
        const result = await axios.get('/trending/movie/week', {
          params: {
            api_key: API_KEY,
            page,
          },
        });
        if (result) {
          updateGenres(result.data, await genres);
        }
        setData(result.data);
      })();
    } else if (mode === 'searchMovie') {
      if (!query) return;
      (async function () {
        const result = await axios.get('/search/movie', {
          params: {
            api_key: API_KEY,
            page,
            query,
          },
        });
        if (result) {
          updateGenres(result.data, await genres);
        }
        setData(result.data);
      })();
    }
  }, [page, query, genres, mode]);

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

  return { data, setPage, setQuery, setData };
}
