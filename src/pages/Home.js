import React from 'react';
import ContentTrending from '../components/ContentTrending/ContentTrending';
import { useGlobalContext } from '../context/context';

const Home = () => {
  const { trendingLoading, trendingMovies } = useGlobalContext();
  return (
    <div className='container'>
      <ContentTrending
        data={trendingMovies || []}
        isLoading={trendingLoading}
        heading={'Trending'}
        limit={14}
        media='movie'
      />
    </div>
  );
};

export default Home;
