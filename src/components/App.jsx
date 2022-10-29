import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import Container from './Container/Container';

import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';

import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout';
import Trailers from './Trailers';

// const Movies = lazy(() => import('../pages/Movies'));
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="trailers" element={<Trailers />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Container>
  );
};
