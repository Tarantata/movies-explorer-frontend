import './Login.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Login() {
  return(
    <main className="login">
      <section className="login__section">
        <Logo />
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <label className="login__form-label">
            E-mail
            <input className="login__input" name="email" type="email" required/>
          </label>
          <span className="login__error-message">Что-то пошло не так...</span>
          <label className="login__form-label">
            Пароль
            <input className="login__input" name="password" type="password" required/>
          </label>
          <span className="login__error-message">Что-то пошло не так...</span>
        </form>
        <button className="login__submit-button" type="submit">Войти</button>
        <span className="login__info-message"></span>
        <div className="login__signup">
          <p className="login__signup-text">Ещё не зарегистрированы?</p>
          <Link to='/signup' className="login__signup-link">Регистрация</Link>
        </div>
      </section>
    </main>
  );
}

export default Login;