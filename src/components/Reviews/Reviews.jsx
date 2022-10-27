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

  if (!data) return;

  return (
    <ul>
      {data.results.map(
        ({ id, author, author_details, content, created_at }) => (
          <li key={id}>
            <p>
              {author} ({author_details.username})
            </p>
            <p>Date of review: {new Date(created_at).toLocaleString()}</p>
            <p>{content}</p>
          </li>
        )
      )}
    </ul>
  );
}
