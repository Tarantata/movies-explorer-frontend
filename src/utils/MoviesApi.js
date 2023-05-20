export const movies_Api = `https://api.nomoreparties.co/beatfilm-movies`;

const _handleResponse = (res) => {
   if (res.ok) {
      return res.json();
   } else {
      Promise.reject(res.status);
   }
};

export const getApiMovies = () => {
   return fetch(movies_Api, {
      method: "GET",
      headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
      },
   }).then(_handleResponse);
};
