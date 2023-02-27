// import { API } from 'servises/API';
import { SearchMovieForm } from 'components/SearchMovie/SearchMovie';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API } from 'servises/API';

export const MoviesPage = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searhMovieParams, setSearchMovieParams] = useSearchParams();


  const searchMovie = searhMovieParams.get('query') ?? '';

  useEffect(() => {
    if (searchMovie === '') {
      return;
    }

    async function getSearchMovies() {
      try {
        setIsLoading(true);
        const movies = await API.fetchSearchMovie(searchMovie);
        setFoundMovies(movies);
        
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getSearchMovies();
  }, [searchMovie]);

  

  const onSubmit = search => {
    setSearchMovieParams({ query: search });
  };
  return (
    <div>
      <SearchMovieForm onSearhFormSubmit={onSubmit} />
      {isLoading && <Loader />}
      {foundMovies.length > 0 && <MoviesGallery movies={foundMovies} />}
      
    </div>
  );
};
