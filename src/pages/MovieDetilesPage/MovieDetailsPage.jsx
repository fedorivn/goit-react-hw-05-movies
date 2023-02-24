import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { API } from 'servises/API';

import { Loader } from 'components/Loader/Loader';
import { MovieDescription } from 'components/MovieDecrItem/MovieDecrItem';

export const MovieDetilesPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMoviesByid() {
      try {
        setIsLoading(true);

        const movieData = await API.fetchMovieById(movieId);
        setMovieDetails(movieData);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesByid();
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  return (
    <main>
      {isLoading && <Loader />}
      <MovieDescription movieDetails={movieDetails} />
    </main>
  );
};
