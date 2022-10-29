import React from 'react';

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
    <>
      <div className="image">
        <img
          className="image__picture"
          src={
            !!poster_path
              ? 'https://image.tmdb.org/t/p/w780' + poster_path
              : 'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in'
          }
          alt={title}
        />
      </div>
      <div className="description">
        <p className="description__title">{title}</p>
        <ul className="description-list">
          <li className="description-list__item">
            <ul className="description-list__values">
              <li className="description-list__title">Vote / Votes</li>
              <li className="description-list__value">
                <span className="description-list__value--vote-orange">
                  {vote_average.toFixed(1)}
                </span>
                /
                <span className="description-list__value--vote-grey">
                  {vote_count}
                </span>
              </li>
            </ul>
          </li>
          <li className="description-list__item">
            <ul className="description-list__values">
              <li className="description-list__title">Popularity</li>
              <li className="description-list__value">{popularity}</li>
            </ul>
          </li>
          <li className="description-list__item">
            <ul className="description-list__values">
              <li className="description-list__title">Original Title</li>
              <li className="description-list__value">{original_title}</li>
            </ul>
          </li>
          <li className="description-list__item">
            <ul className="description-list__values">
              <li className="description-list__title">Genre</li>
              <li className="description-list__value">
                {genres
                  .slice(0, 3)
                  .map(elem => elem.name)
                  .join(', ')}
              </li>
            </ul>
          </li>
        </ul>
        <div className="film-about">
          <p className="film-about__header">About</p>
          <p className="film-about__text">{overview}</p>
        </div>
      </div>
    </>
  );
}
