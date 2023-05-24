import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useValidation } from "../../utils/useValidation";
import React, { useEffect, useContext, useState } from "react";
import { regexPattern } from "../../utils/constants";

function Profile({ onEditProfile, onLogout, profileMessage }) {
   const currentUser = useContext(CurrentUserContext);
   const { values, handleChange, resetForm, isValid, errors } = useValidation();
   const [activeEditButton, setActiveEditButton] = useState(true);
   const [editProfile, setEditProfile] = useState(false);
   const [settingsChange, setSettingsChange] = useState(false);

   useEffect(() => {
      if (currentUser) {
         resetForm(currentUser, {}, true);
      }
   }, [currentUser, resetForm]);

   const handleSubmit = (evt) => {
      evt.preventDefault();
      onEditProfile(values.name, values.email);
      setEditProfile(false);
   };

   const handleLogOutClick = () => {
      setEditProfile(false);
      onLogout();
   };

   useEffect(() => {
      setActiveEditButton(
         (currentUser.name !== values.name ||
            currentUser.email !== values.email) &&
            isValid
      );
   }, [values.name, values.email, isValid]);

   return (
      <>
         <Header />
         <main className="profile">
            <section className="profile__section">
               <h3 className="profile__title">Привет, {currentUser.name}!</h3>
               <form
                  onSubmit={handleSubmit}
                  className="profile__form"
                  name="profileForm"
               >
                  <label className="profile__form-label">
                     Имя
                     <input
                        onChange={handleChange}
                        className={
                           isValid
                              ? "profile__input"
                              : "profile__input profile__input_error"
                        }
                        value={values.name || ""}
                        name="name"
                        pattern={regexPattern.name.pattern}
                        type="text"
                        required
                     />
                  </label>
                  <span className="profile__error-message">{errors.name}</span>
                  <label className="profile__form-label">
                     E-mail
                     <input
                        onChange={handleChange}
                        className={
                           isValid
                              ? "profile__input"
                              : "profile__input profile__input_error"
                        }
                        value={values.email || ""}
                        name="email"
                        pattern={regexPattern.email.pattern}
                        type="email"
                        required
                     />
                  </label>
                  <span className="profile__error-message">{errors.email}</span>
                  {settingsChange ? (
                     <span className="profile__info-message">
                        {profileMessage}
                     </span>
                  ) : (
                     ""
                  )}
                  <button
                     disabled={!activeEditButton}
                     onClick={() => setSettingsChange(true)}
                     className={
                        !activeEditButton
                           ? "profile__edit-button profile__edit-button_invalid"
                           : "profile__edit-button"
                     }
                     type="submit"
                  >
                     {!editProfile ? "Редактировать" : ""}
                  </button>
                  <button
                     type="button"
                     onClick={handleLogOutClick}
                     className="profile__signout-button"
                  >
                     Выйти из аккаунта
                  </button>
               </form>
            </section>
         </main>
      </>
   );
}

export default Profile;
