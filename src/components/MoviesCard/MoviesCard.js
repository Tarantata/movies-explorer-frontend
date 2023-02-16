import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import saved from '../../images/saved.svg';
import remove from '../../images/remove.svg';

function MoviesCard() {
  const location = useLocation();
  return(
    <div className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__description">
          <h3 className="movies-card__title">33 слова о дизайне</h3>
          <p className="movies-card__time">1ч 47м</p>
        </div>
        { location.pathname === '/saved-movies' ?
          <button className="movies-card__delete">
            <img src={remove} className="movies-card__icon movies-card__icon" alt="удалить из сохраненных"/>
          </button>
          :
          <button className="movies-card__mark">
            <img src={saved} className="movies-card__icon" alt="сохраненный фильм"/>
          </button>
        }
      </div>
      <a className="movies-card__frame"
         href="/* movie.trailerLink */"
         target="_blank"
         rel="noreferrer">
        <img className="movies-card__img"
          src={require('../../images/example.jpg')}
          alt={""}
        />
      </a>
    </div>
  );
}

export default MoviesCard;