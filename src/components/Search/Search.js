import React from 'react';
import { images } from '../../utils/images';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import './Search.scss';
const Search = () => {
  let navigate = useNavigate();
  const { query, setQuery } = useGlobalContext();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/results/${query}`);

      setQuery('');
    }
  };
  return (
    <form className='search-form '>
      <img className='search-icon' src={images.search} alt='search' />
      <input
        type='text '
        className='fs-800 form-input'
        value={query}
        placeholder='Search for movies of TV series'
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleSearch}
      />
    </form>
  );
};

export default Search;
