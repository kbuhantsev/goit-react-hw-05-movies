import { useMemo, useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import axios from 'axios';

const API_KEY = '99eb21030dfb3afeff4792ddc8f57a63';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default function useThemoviedb(mode = 'trends') {
  const [query, setQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(null);

  const genres = useMemo(async () => {
    const result = await axios.get('/genre/movie/list', {
      params: {
        api_key: API_KEY,
      },
    });

    return result.data.genres;
  }, []);

  const getData = useCallback(
    async page => {
      if (mode === 'trends') {
        const result = await axios.get('/trending/movie/week', {
          params: {
            api_key: API_KEY,
            page,
          },
        });
        if (result) {
          updateGenres(result.data, await genres);
          setData(result.data);
        }
      } else if (mode === 'searchMovie') {
        if (!query) return;
        const result = await axios.get('/search/movie', {
          params: {
            api_key: API_KEY,
            page,
            query,
          },
        });
        if (result) {
          updateGenres(result.data, await genres);
          setData(result.data);
        }
      }
    },
    [query, genres, mode]
  );

  const handlePage = useCallback(
    async newPage => {
      await getData(newPage);

      const paramsObj = { page: newPage };

      const query = searchParams.get('query');
      if (query) {
        paramsObj.query = query;
      }

      setSearchParams(paramsObj);
    },
    // eslint-disable-next-line
    [getData, setSearchParams]
  );

  useEffect(() => {
    (async () => {
      await getData(searchParams.get('page') || 1);
    })();
    // eslint-disable-next-line
  }, [searchParams]);

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

  return { data, handlePage, setQuery };
}
