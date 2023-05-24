import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
   const receivedMovies = JSON.parse(localStorage.getItem("receivedMovies"));

   if (props.serverError)
      return (
         <span className="movies-cards__empty">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
         </span>
      );

   if (props.movieSearchError) {
      return <span className="movies-cards__empty">Ничего не найдено</span>;
   }

   return (
      <section className="movies-cards">
         <ul className="movies-cards__list">
            {props.moviesCards.map((card) => {
               return (
                  <li
                     key={props.isSaved ? card.movieId : card.id}
                     className="movies-cards__item"
                  >
                     <MoviesCard
                        card={card}
                        isChecked={props.isChecked}
                        isSaved={props.isSaved}
                        onSaveCard={props.onSaveCard}
                        onDeleteCard={props.onDeleteCard}
                     />
                  </li>
               );
            })}
         </ul>
         <div className="movies-cards__more">
            {props.isSaved ? (
               ""
            ) : receivedMovies?.length > props.moviesCards?.length ? (
               <button
                  className="movies-cards__more-button"
                  onClick={props.showMoreCards}
                  type="button"
               >
                  Ещё
               </button>
            ) : (
               ""
            )}
         </div>
      </section>
   );
}

export default MoviesCardList;
