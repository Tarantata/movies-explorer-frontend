import "./MoviesCard.css";

function MoviesCard(props) {
   const movieCardImage = props.isSaved
      ? props.card.image
      : `https://api.nomoreparties.co/${props.card.image.url}`;

   const nameRU = props.card.nameRU;
   const movieFrame = props.card.trailerLink;

   const movieTime = () => {
      if (props.card.duration > 60) {
         return (
            ((props.card.duration / 60) | 0) +
            "ч " +
            (props.card.duration % 60) +
            "м"
         );
      } else {
         return props.card.duration + "м";
      }
   };

   const handleSaveCard = () => {
      props.onSaveCard(props.card);
   };

   const handleDeleteCard = () => {
      props.onDeleteCard(props.card);
   };

   return (
      <div className="movies-card">
         <div className="movies-card__header">
            <div className="movies-card__description">
               <h3 className="movies-card__title">{nameRU}</h3>
               <p className="movies-card__duration">{movieTime()}</p>
            </div>
            <div className="movies-card__button">
               {props.isSaved ? (
                  <button
                     className="movies-card__button-delete"
                     type="button"
                     aria-label="удаление фильма из сохранённых"
                     onClick={handleDeleteCard}
                  >
                     <img
                        src={require("../../images/remove.svg").default}
                        className="movies-card__icon"
                        alt="удалить из сохраненных"
                     />
                  </button>
               ) : props.isChecked(props.card) ? (
                  <button
                     className="movies-card__button-mark"
                     type="button"
                     aria-label="сохранение фильма"
                     onClick={handleDeleteCard}
                  >
                     <img
                        src={require("../../images/liked.svg").default}
                        className="movies-card__icon"
                        alt="сохраненный фильм"
                     />
                  </button>
               ) : (
                  <button
                     className="movies-card__button-delete"
                     type="button"
                     aria-label="сохранение фильма"
                     onClick={handleSaveCard}
                  >
                     <img
                        src={require("../../images/disliked.svg").default}
                        className="movies-card__icon"
                        alt="сохраненный фильм"
                     />
                  </button>
               )}
            </div>
         </div>
         <a
            className="movies-card__frame"
            href={movieFrame}
            target="_blank"
            rel="noreferrer"
         >
            <img
               className="movies-card__img"
               src={movieCardImage}
               alt={"кадр из фильма"}
            />
         </a>
      </div>
   );
}

export default MoviesCard;
