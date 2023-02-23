import {
  MovieContainer,
  MovieTitle,
  MovieSubtitle,
  Description,
  InfoSubtitle,
  MovieLink,
} from 'components/MovieDecrItem/MovieDecrItem.styled';

export const MovieDescription = ({
  movieDetails: {
    original_title,
    overview,
    release_date,
    backdrop_path,
    genres,
    popularity,
  },
}) => {
  const getMovieGenres = genres.map(({ name }) => name).join(' ');

  return (
    <MovieContainer
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <div>
        <MovieTitle>
          {original_title}({release_date})
        </MovieTitle>
        <Description>{popularity}</Description>
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={original_title}
        />
      </div>

      <MovieContainer width={500}>
        <InfoSubtitle>Overwiev</InfoSubtitle>
        <Description> {overview}</Description>

        <MovieSubtitle>Genres</MovieSubtitle>
        <Description>{getMovieGenres}</Description>

        <InfoSubtitle>Additional information</InfoSubtitle>

        <MovieLink to="cast">Cast</MovieLink>
        <MovieLink to="reviwers">Reviwers</MovieLink>
      </MovieContainer>
    </MovieContainer>
  );
};
