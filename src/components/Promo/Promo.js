import './Promo.css';
import NavTab from '../NavTab/NavTab';
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__header">
        <Logo />
        <div className="promo__links">
          <ul className="promo__list">
            <li className="promo__item promo__item">
              <Link to="signup"
                className="promo__link promo__link"
                duration={400}
                smooth={true}
              >Регистрация</Link>
            </li>
            <li className="promo__item promo__item_login">
              <Link to="signin"
                className="promo__link promo__link_login"
                duration={400}
                smooth={true}
              >Войти</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="promo__case">
        <div className="promo__background">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <NavTab />
        </div>
      </div>

    </section>
  );
}

export default Promo;