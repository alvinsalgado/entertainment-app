import React from 'react';
import Content from '../components/Content/Content';
import { useGlobalContext } from '../context/context';

const MoviesPage = () => {
  const { popularMovies } = useGlobalContext();
  return (
    <div className='container'>
      <Content
        data={popularMovies || []}
        heading={'Popular Movies'}
        limit={16}
        media='movie'
      />
    </div>
  );
};

export default MoviesPage;
