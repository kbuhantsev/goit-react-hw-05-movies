import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDatabase from 'utils/MovieDatabaseAPI';

const movieApi = new MovieDatabase();

export default function Cast() {
  const { movieId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getMovieCredits = async () => {
      const data = await movieApi.getMovieCredits(movieId);
      setData(data);
    };
    getMovieCredits();
  }, [movieId]);

  if (!data) return;

  return (
    <>
      <p>Cast</p>
      <ul>
        {data.cast.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              src={'https://image.tmdb.org/t/p/w500' + profile_path}
              alt={data.title}
              loading="lazy"
              width={320}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
