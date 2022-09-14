import React from 'react';
import Content from '../components/Content/Content';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
export const API_ENDPOINT = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=`;
const SearchPage = () => {
  const { query } = useParams();
  const { data: movies } = useFetch(`${API_ENDPOINT}${query}`);

  return (
    <div className='container'>
      <Content
        data={movies || []}
        heading={`Found ${movies === null ? 0 : movies.length} for ${query}`}
      />
    </div>
  );
};

export default SearchPage;
