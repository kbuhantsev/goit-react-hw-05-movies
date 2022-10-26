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
  console.log(data);
  return (
    <>
      <p>Reviews</p>
      <ul>
        {data.results.map(
          ({ id, author, author_details, content, created_at }) => (
            <li key={id}>
              <p>
                {author} ({author_details.username})
              </p>
              <p>Date: {created_at}</p>
              <p>{content}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
}
