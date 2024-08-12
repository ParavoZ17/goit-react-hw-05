import { Link, NavLink } from "react-router-dom";

export default function MovieList({ movieList }) {
  return (
    <ol>
      {movieList.map((item) => (
        <li key={item.id}>
          <NavLink to={`movies/${item.id}`}>{item.title}</NavLink>
        </li>
      ))}
    </ol>
  );
}
