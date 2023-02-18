import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const location = useLocation();
  return (
    <section className="movies-cards">
      <>
        <ul className="movies-cards__list">
          <li className="movies-cards__item">
            <MoviesCard />
          </li>
          <li className="movies-cards__item">
            <MoviesCard />
          </li>
          <li className="movies-cards__item">
            <MoviesCard />
          </li>
          <li className="movies-cards__item">
            <MoviesCard />
          </li>
          <li className="movies-cards__item">
            <MoviesCard />
          </li>
        </ul>
        { location.pathname === '/saved-movies' ?
        <div className="movies-cards__empty"></div>
        :
        <div className="movies-cards__more">
          <button className="movies-cards__more-button">Ещё</button>
        </div>
        }
      </>
    </section>
  );
}

export default MoviesCardList;