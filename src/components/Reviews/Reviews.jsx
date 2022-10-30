import Box from 'components/Box';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDatabase from 'utils/MovieDatabaseAPI';

const movieApi = new MovieDatabase();

export default function Reviews() {
  const { movieId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getMovieReviews = async () => {
      const data = await movieApi.getMovieReviews(movieId);
      setData(data);
    };
    getMovieReviews();
  }, [movieId]);

  useEffect(() => {
    window.scrollBy({
      top: window.screen.height / 2,
      behavior: 'smooth',
    });
  }, [data]);

  if (!data) return;

  return (
    <Box as="ul" marginTop="20px">
      {data.results.map(
        ({ id, author, author_details, content, created_at }) => (
          <li key={id}>
            <Box as="p" fontWeight="500" fontSize="18px">
              {author} ({author_details.username})
            </Box>
            <p>Date of review: {new Date(created_at).toLocaleString()}</p>
            <Box as="p" marginTop="5px" marginBottom="10px">
              {content}
            </Box>
          </li>
        )
      )}
    </Box>
  );
}
