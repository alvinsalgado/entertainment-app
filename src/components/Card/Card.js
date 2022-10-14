import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import { images } from '../../utils/images';
import { Link } from 'react-router-dom';
import './Card.scss';

const IMG_API = 'https://image.tmdb.org/t/p/original';

const Card = ({
  title,
  media_type,
  name,
  backdrop_path,
  poster_path,
  movie,
  release_date,
  first_air_date,
  id,
  media,
}) => {
  if (media_type) {
    media = media_type;
  }

  return (
    <Link to={`/selected/${id}`} state={{ from: media }}>
      <div className='card-container'>
        <img
          className='card-img'
          src={
            backdrop_path === null
              ? IMG_API + poster_path
              : IMG_API + backdrop_path
          }
          alt='poster'
        />
        <Bookmark movie={movie} media={media} />

        <ul className='fs-400 card-body'>
          {release_date && <li>{release_date.slice(0, 4)}</li>}
          {first_air_date && <li>{first_air_date.slice(0, 4)}</li>}

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
            {media === 'movie' ? 'Movie' : 'TV Series'}
          </li>
        </ul>

        <div className='fs-600'>{title || name}</div>
      </div>
    </Link>
  );
};

export default Card;
