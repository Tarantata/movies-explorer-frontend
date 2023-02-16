import './NavTab.css';
import { Link } from "react-scroll";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li className="navtab__point">
          <Link to="about-project" className="navtab__link">О проекте</Link>
        </li>
        <li className="navtab__point">
          <Link to="techs" className="navtab__link">Технологии</Link>
        </li>
        <li className="navtab__point">
          <Link to="about-me" className="navtab__link">Студент</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;