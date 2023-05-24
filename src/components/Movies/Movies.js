import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

function Movies(props) {
   const [checkbox, setCheckbox] = useState(false);

   useEffect(() => {
      setCheckbox(localStorage.getItem("shortMovie") === "true");
   }, []);

   const checkBoxToggle = (checked) => {
      setCheckbox(checked);
   };

   return (
      <>
         <Header />
         <main className="movies-main">
            <SearchForm
               defaultKey={props.defaultKeyWord}
               handleSearch={props.handleSearch}
               setCheckbox={checkBoxToggle}
               checkbox={checkbox}
               moviesCards={props.moviesCards}
            />
            <MoviesCardList
               isChecked={props.isChecked}
               moviesCards={props.moviesCards}
               showMoreCards={props.showMoreCards}
               isSaved={false}
               onSaveCard={props.onSaveCard}
               onDeleteCard={props.onDeleteCard}
               serverError={props.serverError}
               movieSearchError={props.movieSearchError}
            />
         </main>
         <Footer />
      </>
   );
}

export default Movies;
