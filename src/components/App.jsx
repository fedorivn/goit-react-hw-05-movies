import { Route, Routes } from 'react-router-dom';


import { MovieDetilesPage } from 'pages/MovieDetilesPage/MovieDetailsPage';
import { ActorsList } from 'components/MovieCredits/MovieCredits';
import { ReviewList } from 'components/MovieReviewEl/MovieReviewEl';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { MainMarkup } from 'pages/MainMarkup/MainMarkup';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { HomePage } from 'pages/HomePage/HomePage';



export const App = () => {
  return (
    <MainMarkup>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/movies/:movieId" element={<MovieDetilesPage/>}>
          <Route path="cast" element={<ActorsList />} />
          <Route path="reviews" element={<ReviewList />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainMarkup>
  );
};
