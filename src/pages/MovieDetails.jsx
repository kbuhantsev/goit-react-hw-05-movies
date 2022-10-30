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
// import { useTheme } from 'styled-components';
import PageTitle from 'components/PageTitle';
import { ButtonStyled } from 'components/SearchForm/SerachForm.styled';
import MovieDescription from 'components/MovieDescription';

const movieApi = new MovieDatabase();

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
  { href: 'trailers', text: 'Trailers' },
];

export default function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  // const theme = useTheme();

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
      <PageTitle titleText="Movie details" />

      <ButtonStyled type="button" onClick={onButtonBackClick}>
        <BiArrowBack />
        Go back
      </ButtonStyled>
      <MovieDescription movie={data} />

      <ul>
        {navItems.map(({ href, text }) => (
          <li key={text}>
            <Link to={href} state={{ from: backLinkHref }}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </Box>
  );
}
