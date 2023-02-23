import { Link, useLocation } from 'react-router-dom';

import {
  GalleryItem,
  GalleryTitle,
  GalleryImg,
} from 'components/MoviesGalleryItem/MoviesGalleryItem.styled';

export const MoviesGalleryItem = ({ id, title, poster }) => {
  return (
    <GalleryItem>
      <Link to={`/movie/${id}`}>
        <div height={550} overflow="hidden">
          {poster && (
            <GalleryImg
              src={`https://image.tmdb.org/t/p/original/${poster}`}
              alt={title}
            />
          )}
        </div>
        <GalleryTitle>{title}</GalleryTitle>
      </Link>
    </GalleryItem>
  );
};
