import React,{useState, useEffect} from "react";
import api from './services/api'

import "./styles/App.scss";

import Cards from "./components/Cards";
import AsideMenu from "./components/AsideMenu";
import Movie from './components/Movie'

import logo from "./assets/logo.png";
import searchIcon from "./assets/icons/search.svg";

function App() {
  const [movies, setMovies] = useState([])

  function handleSetMovies(handledMovies){
    setMovies(movies)
  }

  return (
    <>
      <header className="header"></header>

      <header className="header header--fixed">
        <figure className="header__logo">
          <img src={logo} alt="Logo" />
        </figure>
        <div className="header__search_bar">
          <div className="search_bar__field">
            <img src={searchIcon} alt="search icon" />
            <input placeholder="Search movies..." type="text" />
          </div>
        </div>
      </header>

      <section className="section">
        <aside className="section__aside">
          <AsideMenu handleSetMovies={handleSetMovies}/>
        </aside>
        <main className="section__main">
          {/* <Cards movies={movies}/> */}
          <Movie/>
        </main>
      </section>
    </>
  );
}

export default App;
