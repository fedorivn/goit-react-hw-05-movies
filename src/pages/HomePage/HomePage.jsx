import { Loader } from 'components/Loader/Loader';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { useEffect, useState } from 'react';
import { API } from 'servises/API';

export const HomePage = () => {
  const [movieOptions, setMovieOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const data = await API.fetchTrendingMovies();

        setMovieOptions(data.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <main>
      {isLoading && <Loader />}

      <MoviesGallery movies={movieOptions} />
    </main>
  );
};
