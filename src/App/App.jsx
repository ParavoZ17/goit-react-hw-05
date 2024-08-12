import { Route, Routes } from "react-router-dom";
import {lazy, Suspense} from 'react'
import "./App.css";
import Navigation from "../Navigation/Navigation";


const HomePage =  lazy(()=>import('../pages/HomePage/HomePage'))
const MovieDetailsPage =  lazy(()=>import('../pages/MovieDetailsPage/MovieDetailsPage'))
const MoviesPage =  lazy(()=>import('../pages/MoviesPage/MoviesPage'))
const MovieCast =  lazy(()=>import('../components/MovieCast/MovieCast'))
const MovieReviews =  lazy(()=>import('../components/MovieReviews/MovieReviews'))
const NotFoundPage =  lazy(()=>import('../pages/NotFoundPage/NotFoundPage'))

function App() {
  return (
    <div>
      <Navigation />
      <br />
      <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes> 
      </Suspense>
    </div>
  );
}

export default App;
