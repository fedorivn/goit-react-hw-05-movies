import { MoviesGalleryList } from 'components/MoviesGallery/MoviesGallery.styled';
import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { API } from 'servises/API';
import { Pagination } from 'components/Pagination/Pagination';

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const MoviesGallery = ({ movies }) => {
  const location = useLocation();
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getMoviesPages() {
      try {
        const data = await API.fetchTrendingMovies(page);
        setTotalPage(data.total_pages);
      } catch (error) {}
    }
    getMoviesPages();
  }, [page]);

  const getPage = page => {
    // console.log('getPage', page);
    setPage(page);
  };

  return (
    <>
      {movies.length > 0 && (
        <MoviesGalleryList>
          {movies.map(({ id, original_title, poster_path }) => {
            return (
              <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
                <MoviesGalleryItem
                  title={original_title}
                  id={id}
                  poster={poster_path}
                />
              </Link>
            );
          })}
        </MoviesGalleryList>
      )}
      <Pagination totalPage={totalPage} getPage={getPage} />
    </>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
      popularity: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
