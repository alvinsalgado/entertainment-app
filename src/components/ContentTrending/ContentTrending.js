import React from 'react';
import CardTrending from '../CardTrending/CardTrending';

import './ContentTrending.scss';

const ContentTrending = ({ data, isLoading, limit, heading }) => {
  if (isLoading) {
    return <div className='loading'></div>;
  }

  return (
    <div className='trending-content-container'>
      <h1 className='fs-900'>{heading}</h1>
      <div className='media-scroller snaps-inline'>
        {data.slice(0, limit).map((movie) => {
          return <CardTrending movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default ContentTrending;
