import React from 'react';
import Content from '../components/Content/Content';
import { useGlobalContext } from '../context/context';

const BookmarkPage = () => {
  const { bookmarked } = useGlobalContext();
  const storedMovies = bookmarked.filter((movie) => movie.media === 'movie');
  const storedTVSeries = bookmarked.filter((movie) => movie.media === 'tv');

  return (
    <div className='container'>
      <Content
        data={storedMovies}
        heading={'Bookmarked Movies'}
        media='movie'
      />
      <Content
        data={storedTVSeries}
        heading={'Bookmarked TV series'}
        media='tv'
      />
    </div>
  );
};

export default BookmarkPage;
