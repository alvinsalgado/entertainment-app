import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import './ContentSelected.scss';
const IMG_API = 'https://image.tmdb.org/t/p/original';

const ContentSelected = () => {
  const { id } = useParams();
  const location = useLocation();
  const { from } = location.state;

  let API = '';
  if (from === 'movie') {
    API = ` https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
  } else {
    API = ` https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
  }
  const { isLoading, data: movie } = useFetch(API);

  if (isLoading) {
    return <div className='loading'></div>;
  }

  function setVoteClass(vote) {
    if (vote >= 7) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  function timeConverter(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours}h ${minutes}m`;
  }

  const {
    poster_path,
    title,
    overview,
    runtime,
    genres,
    vote_average,
    release_date,
    first_air_date,
    backdrop_path,
    status,
    name,
    number_of_episodes,
  } = movie;
  return (
    <section
      className='content-selected-background'
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3)0%, rgba(0, 0, 0, 1) 100%),url(${IMG_API}${backdrop_path})`,
      }}
    >
      <div className='content-selected-container'>
        <img
          className='content-selected-poster'
          src={IMG_API + poster_path}
          alt={title}
        />
        <div className='content-selected-info'>
          <div>
            <h2 className='fs-900 content-selected-heading'>{title || name}</h2>
            <ul className='fs-400 card-body'>
              <li style={{ listStyleType: 'none' }}>
                {runtime
                  ? timeConverter(runtime)
                  : `${number_of_episodes} episodes`}
              </li>
              {genres &&
                genres.map((genre, i) => {
                  return <li key={i}>{genre.name}</li>;
                })}

              {release_date && <li>{release_date.slice(0, 4)}</li>}
              {first_air_date && <li>{first_air_date.slice(0, 4)}</li>}
            </ul>

            <span className={`tag ${setVoteClass(vote_average)}`}>
              {String(vote_average).slice(0, 3)}
            </span>
            <p className='fs-600'>{overview}</p>

            <p className='fs-600'>
              <span>Status :</span> {status}
            </p>
          </div>

          <Link to='/' className='btn'>
            back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentSelected;
