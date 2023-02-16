import './SavedMovies.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function SavedMovies ({ isLoading }) {
  return (
    <>
      <Header />
      {isLoading ? (<Preloader />
      ) : (
      <main className="saved-main">
        <SearchForm />
        <MoviesCardList />
      </main>
        )}
      <Footer />
    </>
  );
}

export default SavedMovies;