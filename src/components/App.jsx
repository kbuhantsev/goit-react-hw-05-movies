import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import Container from './Container/Container';

import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout';
import Trailers from './Trailers';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound'));

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
