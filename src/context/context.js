import React, { useState, useContext, useEffect } from 'react';
import useFetch from '../Hooks/useFetch';

const TRENDING_API_ENDPOINT = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
const POPULAR_MOVIE_ENDPOINT = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
const POPULAR_TV_ENDPOINT = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [bookmarked, setBookmarked] = useState([]);

  const {
    isLoading: trendingLoading,
    error: trendingError,
    data: trendingMovies,
  } = useFetch(`${TRENDING_API_ENDPOINT}`);

  const { data: popularMovies } = useFetch(`${POPULAR_MOVIE_ENDPOINT}`);

  const { data: popularTV } = useFetch(`${POPULAR_TV_ENDPOINT}`);

  useEffect(() => {
    const moviesBookmarked = JSON.parse(localStorage.getItem('data'));

    if (moviesBookmarked) {
      setBookmarked(moviesBookmarked);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('data', JSON.stringify(items));
  };

  const addMovie = (movie, media, toggle) => {
    if (toggle) {
      const newBookmarkedList = bookmarked.filter(
        (bookmarked) => bookmarked.id !== movie.id
      );

      setBookmarked(newBookmarkedList);
      saveToLocalStorage(newBookmarkedList);
    } else {
      const newMovie = {
        ...movie,
        media,
      };
      const newBookmarkedList2 = [...bookmarked, newMovie];
      setBookmarked(newBookmarkedList2);
      saveToLocalStorage(newBookmarkedList2);
    }
  };

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        addMovie,
        bookmarked,
        setBookmarked,
        trendingLoading,
        trendingError,
        trendingMovies,
        popularMovies,
        popularTV,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
