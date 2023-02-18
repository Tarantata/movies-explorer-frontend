import { Route, Routes } from "react-router-dom";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/"
           element={<Main />}
        />
        <Route exact path="/movies"
           element={<Movies />}
        />
        <Route exact path="/saved-movies"
          element={<SavedMovies />}
        />
        <Route exact path="/profile"
          element={<Profile />}
        />
        <Route exact path="/signin"
          element={<Login />}
        />
        <Route exact path="/signup"
          element={<Register />}
        />
        <Route path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
