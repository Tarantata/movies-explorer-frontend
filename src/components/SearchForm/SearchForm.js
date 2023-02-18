import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import lens from '../../images/lens.svg';

function SearchForm() {

  return (
    <section className="search">
      <div className="search__case">
        <form className="search__form">
          <img src={lens} className="search__lens" alt="Лупа"/>
          <input
            className="search__input"
            type="text"
            required
            placeholder="Фильм"
            minLength="2"
            maxLength="60"
          />
          <button
            className="search__button"
            type="submit"
          >
          </button>
          <span className="error-message"></span>
          <FilterCheckbox />
        </form>
        <div className="search__line">
          <hr className="search__line_item" />
        </div>
      </div>
    </section>
  );
}

export default SearchForm;