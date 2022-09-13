import React from 'react';
import Card from '../Card/Card';
import './Content.scss';

const Content = ({ data, heading, limit, media }) => {
  return (
    <div className='content-container'>
      <h1 className='fs-900 content-heading'>{heading}</h1>
      <div className='content'>
        {data.slice(0, limit).map((movie) => {
          return <Card {...movie} movie={movie} media={media} />;
        })}
      </div>
    </div>
  );
};

export default Content;
