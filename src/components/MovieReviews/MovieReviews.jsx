

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReview } from "../../movie.js";



const MovieReviews = () => {
  const [reviews, setReviews] = useState();
  const { moviesId } = useParams();
  useEffect(() => {
    const fetchCredits = async () => {
      const data = await getMovieReview(moviesId);
      setReviews(data);
    };
    fetchCredits();
  }, [moviesId]);
  return (
    <ul >
      {reviews && reviews.length > 0
        ? reviews.map((review) => {
            return (
              <li key={review.id}>
                <h2>{review.author_details.username}</h2>
                <p>{review.content}</p>
                </li>
            );
          })
        : "No reviews yet"}
    </ul>
  );
};

export default MovieReviews;