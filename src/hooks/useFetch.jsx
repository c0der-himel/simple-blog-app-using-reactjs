import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch data');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setErrors(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors(err.message);
      });
  }, [url]);

  return { data, isLoading, errors };
};

export default useFetch;
