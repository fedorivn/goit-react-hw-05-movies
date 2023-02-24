import { MoviesGalleryList } from 'components/MoviesGallery/MoviesGallery.styled';
import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesGallery = ({ movies }) => {
  const location = useLocation();

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
    </>
  );
};
MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
      popularity: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
