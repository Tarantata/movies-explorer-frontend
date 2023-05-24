import "./SearchForm.css";
import { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import lens from "../../images/lens.svg";

function SearchForm(props) {
   const [keyWord, setKeyWord] = useState("");
   const [spanMessage, setSpanMessage] = useState("");

   const inputValidation = (word) => {
      !word
         ? setSpanMessage("Нужно ввести ключевое слово!")
         : setSpanMessage("");
   };

   const handleChangeKeyWord = (evt) => {
      inputValidation(evt.target.value);
      setKeyWord(evt.target.value);
   };

   const handleMovieDuration = (evt) => {
      const isShortMovie = evt.target.checked;
      props.setCheckbox(isShortMovie);
      props.handleSearch(keyWord, isShortMovie);
   };

   const handleSubmit = (evt) => {
      evt.preventDefault();
      props.handleSearch(keyWord, props.checkbox);
      inputValidation(keyWord);
   };

   useEffect(() => {
      setKeyWord(props.defaultKey);
      props.setCheckbox(
         JSON.parse(localStorage.getItem("shortMovies")) || false
      );
   }, []);

   return (
      <section className="search" onSubmit={handleSubmit}>
         <div className="search__case">
            <form
               className="search__form"
               name="searchForm"
               noValidate
               onSubmit={handleSubmit}
            >
               <img src={lens} className="search__lens" alt="Лупа" />
               <input
                  className="search__input"
                  name="movie"
                  value={keyWord}
                  onChange={handleChangeKeyWord}
                  type="text"
                  required
                  placeholder="Фильм"
               />
               <button
                  className="search__button"
                  aria-label="поиск фильмов"
                  type="submit"
               ></button>
               <Checkbox
                  checkbox={props.checkbox}
                  handleMovieDuration={handleMovieDuration}
               />
            </form>
            <span className="search__error-message">{spanMessage}</span>
            <div className="search__line">
               <hr className="search__line_item" />
            </div>
         </div>
      </section>
   );
}

export default SearchForm;
