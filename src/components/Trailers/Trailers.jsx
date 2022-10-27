import ModalWindow from 'components/ModalWindow';
import VideoFrame from 'components/VideoFrame';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDatabase from 'utils/MovieDatabaseAPI';

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
      <ol>
        {data.map(({ id, name, key }) => (
          <li key={id}>
            <p
              onClick={() => onVideoNameClick(key)}
              style={{ cursor: 'pointer' }}
            >
              {name}
            </p>
          </li>
        ))}
      </ol>
      {isModalOpen && (
        <ModalWindow onClose={toggleModal}>
          <VideoFrame videoKey={trailerKey} />
        </ModalWindow>
      )}
    </>
  );
}
