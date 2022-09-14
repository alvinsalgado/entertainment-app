import React from 'react';
import Content from '../components/Content/Content';
import { useGlobalContext } from '../context/context';

const TvSeriesPage = () => {
  const { popularTV } = useGlobalContext();
  return (
    <div className='container'>
      <Content
        data={popularTV || []}
        heading={'Popular TV Series'}
        limit={16}
        media='tv'
      />
    </div>
  );
};

export default TvSeriesPage;
