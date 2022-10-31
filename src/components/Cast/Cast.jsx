import Box from 'components/Box';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDatabase from 'utils/MovieDatabaseAPI';

const movieApi = new MovieDatabase();

export default function Cast() {
  const { movieId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      const data = await movieApi.getMovieCredits(movieId);
      setData(data);
    })();
  }, [movieId]);

  useEffect(() => {
    window.scrollBy({
      top: window.screen.height / 2,
      behavior: 'smooth',
    });
  }, [data]);

  if (!data) return;

  return (
    <Box
      as="ul"
      flexDirection="row"
      gridGap="20px"
      flexWrap="wrap"
      marginTop="20px"
    >
      {data.cast.map(({ id, character, name, profile_path }) => (
        <Box as="li" key={id} flexBasis="200px">
          <img
            src={'https://image.tmdb.org/t/p/w500' + profile_path}
            alt={data.title}
            loading="lazy"
            width={160}
            onError={e =>
              (e.target.src =
                'https://via.placeholder.com/160x240?text=No+photo')
            }
          />
          <Box as="p" fontWeight="500" fontSize="18px">
            {name}
          </Box>
          <p>Character: {character}</p>
        </Box>
      ))}
    </Box>
  );
}
