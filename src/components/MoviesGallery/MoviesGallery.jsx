import { API } from 'servises/API';
import { useState, useEffect } from 'react';

import { Loader } from 'components/Loader/Loader';
import { MoviesGalleryList } from 'components/MoviesGallery/MoviesGallery.styled';
import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';

export const MoviesGallery = () => {
  const [movieOptions, setMovieOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {setTotalPage} = useState(0);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const data = await API.fetchTrendingMovies();

        setMovieOptions(data.results);
        setTotalPage(data.total_pages);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {movieOptions.length > 0 && (
        <MoviesGalleryList>
          {movieOptions.map(({ id, original_title, poster_path }) => {
            return (
              <MoviesGalleryItem
                key={id}
                title={original_title}
                id={id}
                poster={poster_path}
              />
            );
          })}
        </MoviesGalleryList>
      )}
    </>
  );
};
