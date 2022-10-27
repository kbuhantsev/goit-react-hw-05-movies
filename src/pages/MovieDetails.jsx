import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import MovieDatabase from 'utils/MovieDatabaseAPI';
import { BiArrowBack } from 'react-icons/bi';
import Box from 'components/Box';
import { useTheme } from 'styled-components';

const movieApi = new MovieDatabase();

export default function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const theme = useTheme();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovie = async () => {
      const data = await movieApi.getMovie(movieId);
      setData(data);
    };
    getMovie();
  }, [movieId]);

  const onButtonBackClick = () => {
    navigate(backLinkHref, { replace: true });
  };

  if (!data) return;

  return (
    <Box gridGap="10px">
      <button type="button" onClick={onButtonBackClick}>
        <BiArrowBack color={theme.colors.accent} />
        Go back
      </button>

      <Box flexDirection="row" gridGap="20px">
        <img
          src={'https://image.tmdb.org/t/p/w780/' + data.poster_path}
          alt={data.title}
          loading="lazy"
          width={400}
        />
        <Box>
          <Box as="h2">{data.title}</Box>
          <p>{data.overview}</p>
        </Box>
      </Box>

      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            CAST
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            REVIEWS
          </Link>
        </li>
        <li>
          <Link to="trailers" state={{ from: backLinkHref }}>
            TRAILERS
          </Link>
        </li>
      </ul>
      <Outlet />
    </Box>
  );
}
