import Box from 'components/Box';
import ModalWindow from 'components/ModalWindow';
import VideoFrame from 'components/VideoFrame';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDatabase from 'utils/MovieDatabaseAPI';
import { StyledItem, StyledList } from './Trailers.styled';

const movieApi = new MovieDatabase();

export default function Trailers() {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const data = await movieApi.getTrailers(movieId);
      if (data) {
        setData(data.results.filter(item => item.type === 'Trailer'));
      }
    })();
  }, [movieId]);

  useEffect(() => {
    window.scrollBy({
      top: 200,
      behavior: 'smooth',
    });
  }, [data]);

  const toggleModal = useCallback(() => {
    setIsModalOpen(prevState => {
      setIsModalOpen(!prevState);
    });
  }, []);

  const onVideoNameClick = key => {
    setTrailerKey(key);
    toggleModal();
  };

  if (!data) return;

  return data.length ? (
    <>
      <StyledList>
        {data.map(({ id, name, key }) => (
          <StyledItem key={id}>
            <p
              onClick={() => onVideoNameClick(key)}
              style={{ cursor: 'pointer' }}
            >
              {name}
            </p>
          </StyledItem>
        ))}
      </StyledList>
      {isModalOpen && (
        <ModalWindow onClose={toggleModal}>
          <VideoFrame videoKey={trailerKey} />
        </ModalWindow>
      )}
    </>
  ) : (
    <Box marginTop="10px">No trailers was found...</Box>
  );
}
