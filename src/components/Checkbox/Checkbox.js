import "./Checkbox.css";

function Checkbox(props) {
   return (
      <div className="short-film__case">
         <label className="short-film">
            <input
               name="checkbox"
               className="short-film__checkbox"
               type="checkbox"
               aria-label="фильтр короткометражек"
               checked={props.checkbox}
               onChange={props.handleMovieDuration}
            />
            <span className="short-film__switch"></span>
         </label>
         <span className="short-film__description">Короткометражки</span>
      </div>
   );
}

export default Checkbox;
