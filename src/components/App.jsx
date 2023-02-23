import { Route, Routes } from 'react-router-dom';

// import { MainMarkup } from 'pages/MainMarkup/MainMarkup';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MovieDetilesPage } from 'pages/MovieDetilesPage/MovieDetailsPage';
import { ActorsList } from 'components/MovieCredits/MovieCredits';
import { MovieReviewPage } from 'pages/MovieReviewPage/MovieReviewPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { MainMarkup } from 'pages/MainMarkup/MainMarkup';
import { SearchMovieForm } from './SearchMovie/SearchMovie';

// import { API } from 'servises/API';

export const App = () => {
  return (
    <MainMarkup>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<SearchMovieForm/>} />
        <Route path="/movies/:movieId" element={<div>DEtails page</div>}>
          <Route path="cast" element={<ActorsList />} />
          <Route path="reviews" element={<MovieReviewPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainMarkup>
  );
};
