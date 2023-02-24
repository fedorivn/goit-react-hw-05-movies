import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';


import {
  MovieContainer,
  MovieTitle,
  MovieSubtitle,
  Description,
  InfoSubtitle,
  MovieLink,
  BackLink,
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
  const location = useLocation();
  const FROM = location.state?.from;
  const INNER_FROM = location.state?.from.state?.from;
  const backLinkHref = INNER_FROM || FROM || '/';


  return (
    <>
      <BackLink>
        <Link to={backLinkHref}>BACK</Link>
      </BackLink>
      <div style={{ marginLeft: '40px' }}>
        <MovieContainer
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          margin="0 auto"
        >
          <MovieTitle>
            {original_title} <br/> ({release_date})
          </MovieTitle>
          <Description>Raiting: {popularity}</Description>
          <img
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={original_title}
          />
        </MovieContainer>
        <MovieContainer>
          <InfoSubtitle>Overwiev</InfoSubtitle>
          <Description> {overview}</Description>

          <MovieSubtitle>Genres</MovieSubtitle>
          <Description>{getMovieGenres}</Description>

          <InfoSubtitle>Additional information</InfoSubtitle>
          <div style={{ display: 'flex' }}>
            <MovieLink to="cast" state={{ from: location }}>
              Cast
            </MovieLink>
            <MovieLink to="reviews" state={{ from: location }}>
              Reviwers
            </MovieLink>
          </div>
        </MovieContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};


