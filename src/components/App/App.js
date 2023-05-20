import "./App.css";
import React, { useCallback, useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoutes from "../ProtectedRoute/ProtectedRoutes";
import Main from "../Main/Main";
import mainApi from "../../utils/MainApi";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Preloader from "../Preloader/Preloader";
import {
   short_Movie,
   large_Width,
   min_Width,
   max_Show_Cards,
   medium_Show_Cards,
   min_Show_Cards,
   max_Add_Cards,
   min_Add_Cards,
} from "../../utils/constants";
import { getApiMovies } from "../../utils/MoviesApi.js";

function App() {
   const [loggedIn, setLoggedIn] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const [registerMessage, setRegisterMessage] = useState("");
   const [loginMessage, setLoginMessage] = useState("");
   const [profileMessage, setProfileMessage] = useState("");
   const [currentUser, setCurrentUser] = useState({});
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   const [movies, setMovies] = useState([]);
   const [savedMovies, setSavedMovies] = useState([]);
   const navigate = useNavigate();
   const [moreCards, setMoreCards] = useState(0);
   const [serverError, setServerError] = useState(false);

   const handleRegister = useCallback(async (name, email, password) => {
      try {
         const data = await mainApi.registerUser(name, email, password);
         if (data.token) {
            localStorage.setItem("jwt", data.token);
            setLoggedIn(true);
            setCurrentUser(data);
            navigate("/Movies");
         }
      } catch {
         setRegisterMessage("При регистрации пользователя произошла ошибка!");
      }
   }, []);

   const handleLogin = useCallback(async (email, password) => {
      try {
         const data = await mainApi.loginUser(email, password);
         if (data.token) {
            localStorage.setItem("jwt", data.token);
            setLoggedIn(true);
            navigate("/Movies");
         }
      } catch {
         setLoginMessage("При авторизации пользователя произошла ошибка!");
      }
   }, []);

   const handleLogout = () => {
      localStorage.removeItem("jwt");
      localStorage.removeItem("shortMovie");
      localStorage.removeItem("receivedMovies");
      localStorage.removeItem("searchKeyWord");
      localStorage.removeItem("initialMovies");

      setLoggedIn(false);
      setCurrentUser({});
      setSavedMovies([]);
   };

   const handleTokenCheck = useCallback(async () => {
      try {
         setIsLoading(true);
         const token = localStorage.getItem("jwt");
         if (token) {
            const res = await mainApi.getUserInfo();
            if (res) {
               setLoggedIn(true);
               setCurrentUser(res);
            }
         }
      } catch {
      } finally {
         setIsLoading(false);
      }
   }, []);

   useEffect(() => {
      handleTokenCheck().catch((err) => console.error(err));
      getSavedMovies();
   }, [loggedIn]);

   useEffect(() => {
      if (loggedIn) {
         try {
            getApiMovies().then((movies) =>
               localStorage.setItem("initialMovies", JSON.stringify(movies))
            );
         } catch (e) {
            console.error(e);
            setServerError(true);
         }
      }
   }, [loggedIn]);

   const searchMovies = (keyWord, isShortMovie) => {
      setIsLoading(true);

      if (keyWord) {
         const initialMovies = JSON.parse(
            localStorage.getItem("initialMovies")
         );
         const requestedMovies = initialMovies.filter((item) =>
            item.nameRU.toLowerCase().includes(keyWord.toLowerCase())
         );
         const receivedMovies = isShortMovie
            ? requestedMovies.filter((item) => item.duration <= short_Movie)
            : requestedMovies;
         localStorage.setItem("receivedMovies", JSON.stringify(receivedMovies));
         localStorage.setItem("searchKeyWord", keyWord);
         localStorage.setItem("shortMovie", isShortMovie);
         handleResize();
      }

      setIsLoading(false);
   };

   const handleProfile = async (name, email) => {
      try {
         const data = await mainApi.setUserInfo(name, email);
         const response = await data.json();

         if (data.ok) {
            setCurrentUser(response.user);
            setProfileMessage(response.message);
         } else {
            setProfileMessage(response.message);
         }
      } catch (e) {
         console.error(e);
      }
   };

   const checkScreenSize = () => {
      setScreenWidth(window.innerWidth);
   };

   const handleResize = () => {
      const receivedMovies = JSON.parse(localStorage.getItem("receivedMovies"));

      if (receivedMovies === null) {
         return;
      }
      if (screenWidth <= min_Width) {
         setMovies(receivedMovies.slice(0, min_Show_Cards));
         setMoreCards(min_Add_Cards);
      } else if (screenWidth > min_Width && screenWidth < large_Width) {
         setMovies(receivedMovies.slice(0, medium_Show_Cards));
         setMoreCards(min_Add_Cards);
      } else if (screenWidth >= large_Width) {
         setMovies(receivedMovies.slice(0, max_Show_Cards));
         setMoreCards(max_Add_Cards);
      }
   };

   useEffect(() => {
      window.addEventListener("resize", checkScreenSize);
      handleResize();
   }, [screenWidth]);

   const showMoreCards = () => {
      const receivedMovies = JSON.parse(localStorage.getItem("receivedMovies"));
      setMovies(receivedMovies.slice(0, movies.length + moreCards));
   };

   const getSavedMovies = () => {
      mainApi
         .getSavedMovies()
         .then((movies) => {
            setSavedMovies(() => {
               return [...movies];
            });
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const handleSaveCard = (movie) => {
      mainApi
         .setSavedMovies(movie)
         .then((movieData) => {
            setSavedMovies([...savedMovies, movieData]);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const handleDeleteCard = (card) => {
      const deleteCard = savedMovies.find(
         (c) =>
            c.movieId === (card.movieId || card.id) &&
            c.owner === currentUser._id
      );
      if (!deleteCard) return;
      mainApi
         .deleteSavedMovie(deleteCard._id)
         .then(() => {
            setSavedMovies(savedMovies.filter((c) => c._id !== deleteCard._id));
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const isChecked = (card) => {
      return savedMovies.some(
         (item) => item.movieId === card.id && item.owner === currentUser._id
      );
   };

   if (isLoading) {
      return <Preloader />;
   }

   return (
      <div className="App">
         <CurrentUserContext.Provider value={currentUser}>
            <Routes>
               <Route
                  exact
                  path="/"
                  element={<Main loggedIn={loggedIn} isLoading={isLoading} />}
               />
               <Route
                  path="/"
                  element={<ProtectedRoutes loggedIn={loggedIn} />}
               >
                  <Route
                     element={
                        <Movies
                           handleSearch={searchMovies}
                           onSaveCard={handleSaveCard}
                           isChecked={isChecked}
                           moviesCards={movies}
                           showMoreCards={showMoreCards}
                           onDeleteCard={handleDeleteCard}
                           defaultKeyWord={
                              localStorage.getItem("searchKeyWord") || ""
                           }
                           isLoading={isLoading}
                           serverError={serverError}
                        />
                     }
                     path="movies"
                  />
                  <Route
                     element={
                        <SavedMovies
                           isChecked={isChecked}
                           onDeleteCard={handleDeleteCard}
                           moviesCards={savedMovies}
                           isLoading={isLoading}
                           serverError={serverError}
                        />
                     }
                     path="saved-movies"
                  />
                  <Route
                     element={
                        <Profile
                           onLogout={handleLogout}
                           profileMessage={profileMessage}
                           onEditProfile={handleProfile}
                        />
                     }
                     path="profile"
                  />
               </Route>
               <Route
                  path="/signin"
                  element={
                     <Login
                        handleLogin={handleLogin}
                        loggedIn={loggedIn}
                        loginMessage={loginMessage}
                     />
                  }
               ></Route>
               <Route
                  path="/signup"
                  element={
                     <Register
                        handleRegister={handleRegister}
                        loggedIn={loggedIn}
                        registerMessage={registerMessage}
                     />
                  }
               ></Route>
               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </CurrentUserContext.Provider>
      </div>
   );
}

export default App;
