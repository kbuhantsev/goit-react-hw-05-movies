import ModalWindow from 'components/ModalWindow';
import VideoFrame from 'components/VideoFrame';
import React, { useEffect, useState } from 'react';
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
    const getTrailers = async () => {
      const data = await movieApi.getTrailers(movieId);
      if (data) {
        setData(data.results.filter(item => item.type === 'Trailer'));
      }
    };
    getTrailers();
  }, [movieId]);

  useEffect(() => {
    if (trailerKey) {
      toggleModal();
    }
  }, [trailerKey]);

  useEffect(() => {
    window.scrollBy({
      top: 200,
      behavior: 'smooth',
    });
  }, [data]);

  const onVideoNameClick = key => {
    setTrailerKey(key);
  };

  const toggleModal = () => {
    setIsModalOpen(prevState => {
      setIsModalOpen(!prevState);
    });
  };

  if (!data) return;

  return (
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
  );
}
