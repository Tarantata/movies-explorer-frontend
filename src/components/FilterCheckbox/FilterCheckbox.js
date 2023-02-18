import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, onChecked }) {
  function handleCheck() {
    isChecked ? onChecked(false) : onChecked(true);
    }
  return (
    <div className="short-film__case">
      <label className="short-film">
        <input
          name="switch"
          className="short-film__checkbox"
          type="checkbox"
          aria-label="короткометражный фильм"
          onChange={handleCheck}
          checked={isChecked}
        />
        <span className="short-film__switch"></span>
      </label>
      <span className="short-film__description">Короткометражки</span>
    </div>

  );
}

export default FilterCheckbox;