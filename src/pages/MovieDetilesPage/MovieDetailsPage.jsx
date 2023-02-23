import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { API } from 'servises/API';

import { Loader } from 'components/Loader/Loader';
import { MovieDescription } from 'components/MovieDecrItem/MovieDecrItem';

export const MovieDetilesPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMoviesByid() {
      try {
        setIsLoading(true);

        const movieData = await API.fetchMovieById(id);
        setMovieDetails(movieData);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesByid();
  }, [id]);

  if (!movieDetails) {
    return null;
  }

  return (
    <main>
      details page
      {isLoading && <Loader />}
      <MovieDescription movieDetails={movieDetails} />
    </main>
  );
};
