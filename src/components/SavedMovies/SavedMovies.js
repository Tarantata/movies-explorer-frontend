import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { short_Movie } from "../../utils/constants";

function SavedMovies(props) {
   const [initialMovies, setInitialMovies] = useState([]);
   const [filteredMovies, setFilteredMovies] = useState([]);
   const [checkbox, setCheckbox] = useState(false);
   const [movieSearchError, setMovieSearchError] = useState(false);

   const handleSearch = (keyWord, isShortMovie) => {
      const filteredMovies = initialMovies.filter((item) =>
         item.nameRU.toLowerCase().includes(keyWord.toLowerCase())
      );
      if (isShortMovie) {
         setFilteredMovies(
            filteredMovies.filter((item) => item.duration <= short_Movie)
         );
      } else {
         setFilteredMovies(filteredMovies);
      }
   };

   useEffect(() => {
      setInitialMovies(props.moviesCards);
      setFilteredMovies(props.moviesCards);
   }, [props.moviesCards]);

   useEffect(() => {
      !filteredMovies.length
         ? setMovieSearchError(true)
         : setMovieSearchError(false);
   }, [filteredMovies]);

   return (
      <>
         <Header />
         <main className="saved-main">
            <SearchForm
               defaultKey=""
               handleSearch={handleSearch}
               setCheckbox={setCheckbox}
               checkbox={checkbox}
               moviesCards={filteredMovies}
            />
            <MoviesCardList
               isChecked={props.isChecked}
               isSaved={true}
               moviesCards={filteredMovies}
               onDeleteCard={props.onDeleteCard}
               serverError={props.serverError}
               movieSearchError={movieSearchError}
            />
         </main>
         <Footer />
      </>
   );
}

export default SavedMovies;
