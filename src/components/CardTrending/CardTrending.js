import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import { Link } from 'react-router-dom';
import { images } from '../../utils/images';
import './CardTrending.scss';
const IMG_API = 'https://image.tmdb.org/t/p/original/';

const CardTrending = ({ movie }) => {
  const {
    title,
    release_date,
    first_air_date,
    media_type,
    backdrop_path,
    name,
    id,
  } = movie;

  return (
    <Link to={`/selected/${id}`} state={{ from: media_type }}>
      <div className='movie-trending-card'>
        <img src={IMG_API + backdrop_path} alt='poster' />
        <Bookmark movie={movie} media={media_type} />
        <div className='movie-card-details'>
          <ul class='fs-500 card-body'>
            {release_date && (
              <li style={{ listStyleType: 'none' }}>
                {release_date.slice(0, 4)}
              </li>
            )}
            {first_air_date && (
              <li style={{ listStyleType: 'none' }}>
                {first_air_date.slice(0, 4)}
              </li>
            )}
            <li>
              <img
                className='media-icon'
                src={
                  media_type === 'movie'
                    ? images.categoryMovie
                    : images.categoryTv
                }
                alt='icon'
              />
              {media_type === 'tv' ? 'TV Series' : 'Movie'}
            </li>
          </ul>

          <h3 className='fs-700'>{title || name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CardTrending;
