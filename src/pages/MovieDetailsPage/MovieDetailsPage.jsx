import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams, Link } from "react-router-dom";
import { getMovieById } from "../../movie";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(false);
        setLoad(true);
        const response = await getMovieById(moviesId);
        setMovie(response);
      } catch {
        setError(true);
      } finally {
        setLoad(false);
      }
    };

    fetchMovies();
  }, [moviesId]);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");
  return (
    <div>
      {load && <div>Loading...</div>}
      {!load &&
        (error ? (
          <NotFoundPage />
        ) : (
          <div>
            <Link to={backLinkRef.current}>Back</Link>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <div>
              <p>{movie.original_title}</p>
              <ul>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>
              <p>
                Rating: <span>{movie.vote_average}</span>
              </p>
              <p>{movie.overview}</p>
            </div>
            <ul>
              <li>
                <NavLink to="cast">Actors</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
            <Outlet/>
          </div>
        ))}
    </div>
  );
};

export default MovieDetailsPage;
