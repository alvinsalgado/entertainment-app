import { useState, useEffect } from 'react';

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({
    show: false,
    msg: '',
  });
  const [data, setData] = useState(null);
  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.success === false) {
        setError({ show: true, msg: data.status_message });
      } else {
        console.log(data);
        setData(data.results || data);
        setError({ show: false, msg: '' });
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${urlParams}`);
  }, [urlParams]);
  return { isLoading, error, data };
};

export default useFetch;
