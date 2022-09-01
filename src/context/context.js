import React, { useState, useContext, useEffect } from 'react';
import useFetch from '../Hooks/useFetch';

const TRENDING_API_ENDPOINT = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [bookmarked, setBookmarked] = useState([]);

  const {
    isLoading: trendingLoading,
    error: trendingError,
    data: trendingMovies,
  } = useFetch(`${TRENDING_API_ENDPOINT}`);

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        bookmarked,
        setBookmarked,
        trendingLoading,
        trendingMovies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
