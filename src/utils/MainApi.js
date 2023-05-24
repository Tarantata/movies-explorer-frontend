class MainApi {
   constructor(config) {
      this._url = config.url;
   }

   _handleResponse(res) {
      if (res.ok) {
         return res.json();
      } else {
         return Promise.reject(`Ошибка: ${res.statusText}`);
      }
   }

   registerUser(name, email, password) {
      return fetch(`${this._url}/signup`, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ name: name, email: email, password: password }),
      }).then(this._handleResponse);
   }

   loginUser(email, password) {
      return fetch(`${this._url}/signin`, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ email: email, password: password }),
      }).then(this._handleResponse);
   }

   getUserInfo() {
      return fetch(`${this._url}/users/me`, {
         method: "GET",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
      }).then(this._handleResponse);
   }

   setUserInfo(name, email) {
      return fetch(`${this._url}/users/me`, {
         method: "PATCH",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
         body: JSON.stringify({ name: name, email: email }),
      });
   }

   setSavedMovies(movie) {
      return fetch(`${this._url}/movies`, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
         body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            movieId: movie.id.toString(),
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
         }),
      }).then(this._handleResponse);
   }

   getSavedMovies() {
      return fetch(`${this._url}/movies`, {
         method: "GET",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
      }).then(this._handleResponse);
   }

   deleteSavedMovie(id) {
      return fetch(`${this._url}/movies/${id}`, {
         method: "DELETE",
         headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
      }).then(this._handleResponse);
   }
}

const mainApi = new MainApi({
   url: "https://vvv-diploma.backend.nomoredomainsclub.ru",
   headers: {
      "Content-Type": "application/json",
   },
});

export default mainApi;
