import './BurgerMenu.css';
import { NavLink } from "react-router-dom";

function BurgerMenu({ isOpen, isClose }) {
  return (
    <div className={`burger-menu ${isOpen && 'open'}`}>
      <div className='burger-menu__case'>
        <button
          className='burger-menu__close'
          onClick={isClose}
          type='button'
        />
        <nav className='burger-menu__link-case'>
          <NavLink to='/' className={({isActive}) => `burger-menu__link ${isActive ? "burger-menu__link_active" : ""}`}>Главная</NavLink>
          <NavLink to='/movies' className={({isActive}) => `burger-menu__link ${isActive ? "burger-menu__link_active" : ""}`}>Фильмы</NavLink>
          <NavLink to='/saved-movies' className={({isActive}) => `burger-menu__link ${isActive ? "burger-menu__link_active" : ""}`}>Сохраненные фильмы</NavLink>
        </nav>
        <NavLink to='/profile' className='burger-menu__link-profile'>Аккаунт</NavLink>
      </div>
    </div>
  );
}

export default BurgerMenu;