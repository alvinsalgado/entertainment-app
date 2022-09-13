import React from 'react';
import { bookmarkEmpty, bookmarkFull } from '../../utils/images';
import { useGlobalContext } from '../../context/context';
import './Bookmark.scss';
const Bookmark = ({ movie, media }) => {
  const { bookmarked, addMovie } = useGlobalContext();

  let storedContent = bookmarked.find((saved) => saved.id === movie.id);
  const toggle = storedContent ? true : false;

  return (
    <div
      className='bookmark'
      onClick={(e) => {
        e.preventDefault();
        addMovie(movie, media, toggle);
      }}
    >
      {toggle ? bookmarkFull.image : bookmarkEmpty.image}
    </div>
  );
};

export default Bookmark;
