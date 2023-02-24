import PropTypes from "prop-types"

import {
  GalleryItem,
  GalleryTitle,
  GalleryImg,
} from 'components/MoviesGalleryItem/MoviesGalleryItem.styled';

export const MoviesGalleryItem = ({ title, poster }) => {
  return (
    <>
      <GalleryItem>
        <div height={550} overflow="hidden">
          {poster && (
            <GalleryImg
              src={`https://image.tmdb.org/t/p/original/${poster}` || "./"}
              alt={title}
              onError={(e) =>
                (e.target.onerror = null)(
                  (e.target.src =
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg")
                )
              }
            />
          )}
        </div>
        <GalleryTitle>{title || 'Press more for details'} </GalleryTitle>
      </GalleryItem>
    </>
  );
};

MoviesGalleryItem.propTypes= {
  title: PropTypes.string,
  poster: PropTypes.string
}