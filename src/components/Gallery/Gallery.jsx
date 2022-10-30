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
import plaseholderImg from '../../images/empty.png';
import PropTypes from 'prop-types';

export default function Gallery({ items }) {
  const location = useLocation();

  const onError = event => {
    event.target.src = plaseholderImg;
    event.target.style.height = '400px';
  };

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
              onError={onError}
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

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        })
      ),
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
