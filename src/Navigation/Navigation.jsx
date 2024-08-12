import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { clsx } from "clsx";

const makeLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.isActive);
  }
export default function Navigation() {
  return (
    <nav className={css.navi}>
      <NavLink
        to="/"
        className={makeLinkClass}
      >
        Home Page
      </NavLink>
      <NavLink
        to="/movies"
        className={makeLinkClass}
      >
        New Page
      </NavLink>
    </nav>
  );
}
