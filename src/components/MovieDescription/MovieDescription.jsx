import Box from 'components/Box';
import React from 'react';
import {
  DescrList,
  DescrListTitle,
  DescrListValue,
  DescrListValues,
  DescrTitle,
  DescrWrapperStyled,
  FilmDescrContainer,
  ImageStyled,
  ImageWrapperStyled,
  Vote,
  VoteAccent,
} from './MovieDescription.styled';

export default function MovieDescription({ movie }) {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = movie;
  return (
    <FilmDescrContainer>
      <ImageWrapperStyled>
        <ImageStyled
          src={
            !!poster_path
              ? 'https://image.tmdb.org/t/p/w780' + poster_path
              : 'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in'
          }
          alt={title}
        />
      </ImageWrapperStyled>
      <DescrWrapperStyled>
        <DescrTitle>{title}</DescrTitle>
        <DescrList>
          <li>
            <DescrListValues>
              <DescrListTitle>Vote / Votes</DescrListTitle>
              <DescrListValue>
                <VoteAccent>{vote_average.toFixed(1)}</VoteAccent>/
                <Vote>{vote_count}</Vote>
              </DescrListValue>
            </DescrListValues>
          </li>
          <li>
            <DescrListValues>
              <DescrListTitle>Popularity</DescrListTitle>
              <DescrListValue>{popularity}</DescrListValue>
            </DescrListValues>
          </li>
          <li>
            <DescrListValues>
              <DescrListTitle>Original Title</DescrListTitle>
              <DescrListValue>{original_title}</DescrListValue>
            </DescrListValues>
          </li>
          <li>
            <DescrListValues>
              <DescrListTitle>Genre</DescrListTitle>
              <DescrListValue>
                {genres
                  .slice(0, 3)
                  .map(elem => elem.name)
                  .join(', ')}
              </DescrListValue>
            </DescrListValues>
          </li>
        </DescrList>
        <Box>
          <Box as="p" marginBottom="10px" fontSize="20px">
            About
          </Box>
          <Box as="p" lineHeight="1.5">
            {overview}
          </Box>
        </Box>
      </DescrWrapperStyled>
    </FilmDescrContainer>
  );
}
