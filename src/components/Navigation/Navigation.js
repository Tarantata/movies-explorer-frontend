import './Navigation.css';
import { NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';

function Navigation() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState('');
  const handleBurgerMenuOpenClick = () => setIsBurgerMenuOpen('open');
  const handleBurgerMenuCloseClick = () => setIsBurgerMenuOpen('');

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__films">
            <NavLink
              to="/movies"
              className="navigation__link">
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__films">
            <NavLink
              to="/saved-movies"
              className="navigation__link">
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="navigation__profile">
            <NavLink
              to="/profile"
              className="navigation__link navigation__link_profile">
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className="navigation__button-open"
        onClick={handleBurgerMenuOpenClick}
      >
      </button>
      <BurgerMenu
        isOpen={isBurgerMenuOpen}
        isClose={handleBurgerMenuCloseClick}
      >
      </BurgerMenu>
    </>
  );
}

export default Navigation;