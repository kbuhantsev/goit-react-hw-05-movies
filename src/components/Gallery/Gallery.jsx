import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  StyledLink,
  GalleryUlStyled,
  GalleryLiStyled,
  ImgStyled,
  DescrListStyled,
  DescrTitleStyled,
  DescrGenreStyled,
} from './Gallery.styled';

export default function Gallery({ items }) {
  const location = useLocation();

  return (
    <GalleryUlStyled>
      {items.map(({ poster_path, release_date, genres, id, title }) => (
        <GalleryLiStyled key={id}>
          <StyledLink to={'/movies/' + id} state={{ from: location }}>
            <ImgStyled
              src={
                !!poster_path
                  ? 'https://image.tmdb.org/t/p/w780/' + poster_path
                  : '#'
              }
              className="gallery__image"
              alt={!!poster_path ? title : 'broken'}
              loading="lazy"
              width="280"
            />
          </StyledLink>
          <DescrListStyled>
            <li>
              <DescrTitleStyled>{title}</DescrTitleStyled>
            </li>
            <li>
              <DescrGenreStyled>
                {genres
                  .slice(0, 3)
                  .map(elem => elem.name)
                  .join(', ')}
                &nbsp;
                {release_date.slice(0, 4)}
              </DescrGenreStyled>
            </li>
          </DescrListStyled>
        </GalleryLiStyled>
      ))}
    </GalleryUlStyled>
  );
}
