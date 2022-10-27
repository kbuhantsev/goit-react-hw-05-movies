import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link, Outlet, useParams } from 'react-router-dom';
import MovieDatabase from 'utils/MovieDatabaseAPI';
import { BiArrowBack } from 'react-icons/bi';

const movieApi = new MovieDatabase();

export default function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await movieApi.getMovie(movieId);
      setData(data);
    };
    getMovie();
  }, [movieId]);

  const onButtonBackClick = () => {
    navigate(location.state.from, { replace: true });
  };

  if (!data) return;

  return (
    <>
      <button type="button" onClick={onButtonBackClick}>
        <BiArrowBack color="blue" />
        Go back
      </button>
      <img
        src={'https://image.tmdb.org/t/p/w780/' + data.poster_path}
        alt={data.title}
        loading="lazy"
        width={400}
      />
      <p>{data.title}</p>
      <p>{data.overview}</p>

      <ul>
        <li>
          <Link to="cast">CAST</Link>
        </li>
        <li>
          <Link to="reviews">REVIEWS</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
