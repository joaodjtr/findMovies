import React,{useState, useEffect} from "react";

import api from './services/api'

import "./styles/App.scss";

import Cards from "./components/Cards";
import AsideMenu from "./components/AsideMenu";
// import Movie from './components/Movie'

import logo from "./assets/logo.png";
import searchIcon from "./assets/icons/search.svg";

function App() {
  const [configs, setConfigs] = useState({})
  const [baseURL, setBaseURL] = useState('')
  const [posterSize, setPosterSize] = useState('')
  const [movies, setMovies] = useState([])
  const [sort_by, setSortBy] = useState('popularity.desc')
  
  useEffect(()=>{
    async function getConfigs(){
      setConfigs(await api.use.get(`configuration?api_key=6ced056b0cb72f6bbce6b75bef270846`))
    }
    getConfigs()
  },[])


  function handleSetMovies(handledMovies, sort_by){
    setMovies(handledMovies)
    setSortBy(sort_by)
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
          <AsideMenu configs={configs} handleSetMovies={handleSetMovies}/>
        </aside>
        <main className="section__main">
          <Cards configs={configs} sort_by={sort_by} movies={movies}/>
          {/* <Movie/> */}
        </main>
      </section>
    </>
  );
}

export default App;
