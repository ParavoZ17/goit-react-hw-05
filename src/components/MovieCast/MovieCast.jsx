
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../movie.js";



const MovieCast = () => {
  const [cast, setCast] = useState();
  const { moviesId } = useParams();
  useEffect(() => {
    const fetchCredits = async () => {
      const data = await getMovieCast(moviesId);
      setCast(data);
    };
    fetchCredits();
  }, [moviesId]);
  return (
    <ul >
      {cast && cast.length > 0
        ? cast.map((actor) => {
            return (
              <li key={actor.id}>
               <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}/>
                <p>{actor.name}</p>
                </li>
            );
          })
        : "No reviews yet"}
    </ul>
  );
};

export default MovieCast;