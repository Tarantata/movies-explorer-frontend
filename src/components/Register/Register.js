import "./Register.css";
import React, { useEffect } from "react";
import { regexPattern } from "../../utils/constants";
import { Link, Navigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useValidation } from "../../utils/useValidation";

function Register({ handleRegister, loggedIn, registerMessage }) {
   const { values, handleChange, resetForm, isValid, errors } = useValidation();

   const handleSubmit = (evt) => {
      evt.preventDefault();
      handleRegister(values.name, values.email, values.password);
   };

   useEffect(() => {
      resetForm();
   }, [resetForm]);

   if (loggedIn) {
      return <Navigate to="/movies" />;
   }

   return (
      <main className="register">
         <section className="register__section">
            <Logo />
            <h2 className="register__title">Добро пожаловать!</h2>
            <form
               onSubmit={handleSubmit}
               className="register__form"
               name="registerForm"
            >
               <label className="register__form-label">
                  Имя
                  <input
                     onChange={handleChange}
                     className={
                        isValid
                           ? "register__input"
                           : "register__input register__input_error"
                     }
                     value={values.name || ""}
                     minLength="2"
                     name="name"
                     pattern={regexPattern.name.pattern}
                     type="text"
                     required
                  />
               </label>
               <span className="register__error-message">{errors.name}</span>
               <label className="register__form-label">
                  E-mail
                  <input
                     onChange={handleChange}
                     className={
                        isValid
                           ? "register__input"
                           : "register__input register__input_error"
                     }
                     value={values.email || ""}
                     name="email"
                     pattern={regexPattern.email.pattern}
                     type="email"
                     required
                  />
               </label>
               <span className="register__error-message">{errors.email}</span>
               <label className="register__form-label">
                  Пароль
                  <input
                     onChange={handleChange}
                     className={
                        isValid
                           ? "register__input"
                           : "register__input register__input_error"
                     }
                     value={values.password || ""}
                     minLength="6"
                     name="password"
                     type="password"
                     required
                  />
               </label>
               <span className="register__error-message">
                  {errors.password}
               </span>
               <span className="register__info-message">{registerMessage}</span>
               <button
                  disabled={!isValid}
                  className={
                     isValid
                        ? "register__submit-button"
                        : "register__submit-button"
                  }
                  type="submit"
               >
                  Зарегистрироваться
               </button>
            </form>
            <div className="register__signin">
               <p className="register__signin-text">Уже зарегистрированы?</p>
               <Link to="/signin" className="register__signin-link">
                  Войти
               </Link>
            </div>
         </section>
      </main>
   );
}

export default Register;
