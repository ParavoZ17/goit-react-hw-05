import { Link, useLocation } from "react-router-dom";
export default function MovieList({ movieList }) {
  const location = useLocation();

  return (
    <ol>
      {movieList.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={location}>{item.title}</Link>
        </li>
      ))}
    </ol>
  );
}
