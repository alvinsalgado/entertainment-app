import React from 'react';
import Content from '../components/Content/Content';
import ContentTrending from '../components/ContentTrending/ContentTrending';
import { useGlobalContext } from '../context/context';

const Home = () => {
  const { trendingLoading, trendingMovies, popularMovies, popularTV } =
    useGlobalContext();
  return (
    <div className='container'>
      <ContentTrending
        data={trendingMovies || []}
        isLoading={trendingLoading}
        heading={'Trending'}
        limit={14}
      />
      <Content
        data={popularMovies || []}
        heading={'Popular Movies'}
        limit={8}
        media='movie'
      />

      <Content
        data={popularTV || []}
        heading={'Popular TV Series'}
        limit={8}
        media='tv'
      />
    </div>
  );
};

export default Home;
