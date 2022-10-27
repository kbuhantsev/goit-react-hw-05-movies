import React from 'react';

export default function VideoFrame({ videoKey }) {
  return (
    <iframe
      title="ytplayer"
      id="ytplayer"
      type="text/html"
      src={
        'https://www.youtube.com/embed/' +
        videoKey +
        '?autoplay=1&origin=https://kbuhantsev.github.io/goit-react-hw-05-movies/'
      }
      style={{ width: '100%', height: '100%' }}
    />
  );
}
