import "./Login.css";
import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useValidation } from "../../utils/useValidation";
import { regexPattern } from "../../utils/constants";

function Login({ handleLogin, loggedIn, loginMessage }) {
   const { values, handleChange, resetForm, isValid, errors } = useValidation();

   const handleSubmit = (evt) => {
      evt.preventDefault();
      handleLogin(values.email, values.password);
   };

   useEffect(() => {
      resetForm();
   }, [resetForm]);

   if (loggedIn) {
      return <Navigate to="/movies" />;
   }

   return (
      <main className="login">
         <section className="login__section">
            <Logo />
            <h2 className="login__title">Рады видеть !</h2>
            <form
               onSubmit={handleSubmit}
               className="login__form"
               name="loginForm"
            >
               <label className="login__form-label">
                  E-mail
                  <input
                     onChange={handleChange}
                     className={
                        isValid
                           ? "login__input"
                           : "login__input login__input_error"
                     }
                     value={values.email || ""}
                     name="email"
                     pattern={regexPattern.email.pattern}
                     type="email"
                     required
                  />
               </label>
               <span className="login__error-message">{errors.email}</span>
               <label className="login__form-label">
                  Пароль
                  <input
                     onChange={handleChange}
                     className={
                        isValid
                           ? "login__input"
                           : "login__input login__input_error"
                     }
                     value={values.password || ""}
                     minLength="6"
                     name="password"
                     type="password"
                     required
                  />
               </label>
               <span className="login__error-message">{errors.password}</span>
               <span className="login__info-message">{loginMessage}</span>
               <button
                  disabled={!isValid}
                  className={
                     isValid ? "login__submit-button" : "login__submit-button"
                  }
                  type="submit"
               >
                  Войти
               </button>
            </form>
            <div className="login__signup">
               <p className="login__signup-text">Ещё не зарегистрированы?</p>
               <Link to="/signup" className="login__signup-link">
                  Регистрация
               </Link>
            </div>
         </section>
      </main>
   );
}

export default Login;
