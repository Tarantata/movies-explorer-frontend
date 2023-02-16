import './Register.css';
import { Link } from 'react-router-dom';
import Logo from "../Logo/Logo";

function Register() {

  return(
    <main className="register">
      <section className="register__section">
        <Logo />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" name="registerForm">
          <label className="register__field">
            Имя
            <input className="register__input" name="name" type="text" required/>
          </label>
          <span className="register__error-message">Что-то пошло не так...</span>
          <label className="register__form-label">
            E-mail
            <input className="register__input" name="email" type="email" required/>
          </label>
          <span className="register__error-message">Что-то пошло не так...</span>
          <label className="register__field">
            Пароль
            <input className="register__input" name="password" type="password" required/>
          </label>
          <span className="register__error-message">Что-то пошло не так...</span>
        </form>
          <button
            className="register__submit-button"
            type="submit">Зарегистрироваться</button>
        <span className="login__info-message"></span>
        <div className="register__signin">
          <p className="register__signin-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__signin-link">Войти</Link>
        </div>
      </section>
    </main>
  );
}

export default Register;