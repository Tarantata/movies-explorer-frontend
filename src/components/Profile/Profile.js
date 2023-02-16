import './Profile.css';
import Header from "../Header/Header";

function Profile() {
  return(
    <>
      <Header />
      <main className="profile">
        <section className="profile__section">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <label className="profile__form-label">
              Имя
              <input className="profile__input" name="name" type="text" required />
            </label>
            <span className="profile__error-message"></span>
            <label className="profile__form-label">
              E-mail
              <input className="profile__input" name="email" type="email" required />
            </label>
            <span className="profile__error-message"></span>
          </form>
          <button className="profile__submit-button">Сохранить</button>
          <span className="profile__info-message"></span>
          <button className="profile__edit-button">Редактировать</button>
          <button className="profile__signout-button">Выйти из аккаунта</button>
        </section>
      </main>
    </>
  );
}

export default Profile;