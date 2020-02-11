import React,{useState, useEffect} from "react";

import api from './services/api'

import "./styles/App.scss";

import SearchBar from './components/SearchBar'
import Cards from "./components/Cards";
import AsideMenu from "./components/AsideMenu";
import Actor from './components/Actor'
import Movie from './components/Movie'

import logo from "./assets/logo.png";

function App() {
  const [configs, setConfigs] = useState({})
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("Popular movies")
  const [sortBy, setSortBy] = useState('')
  const [pressedGenres, setPressedGenres] = useState('')
  useEffect(()=>{
    async function getConfigs(){
      let {data} = await api.use.get(`configuration?api_key=${api.key}`)
      let genres = await api.use.get(`genre/movie/list?api_key=${api.key}`)
      data.genres = genres.data.genres
      setConfigs(data)
    }
    getConfigs()
  },[])

  async function handleSetMovies(handledMovies, filter, sort_by, strGenres){

    if(!handledMovies){
      let {data} = await api.use.get(`/discover/movie?api_key=${api.key}&sort_by=${sortBy}&${sortBy === "vote_average.desc" ? "vote_count.gte=1500" : ""}${sortBy === "release_date.desc" ? "vote_count.gte=100" : ""}&with_genres=${pressedGenres}`)
      handledMovies = data.results
    }else if(sort_by){
      setSortBy(sort_by)
      setPressedGenres(strGenres)
    }

    setMovies(await requestDetails(handledMovies))
    if(filter === "popularity.desc" || !filter && sortBy === "popularity.desc") setTitle("Popular movies")
    else if(filter === "vote_average.desc" || !filter === undefined && sortBy === "vote_average.desc") setTitle("Top rated movies")
    else if(filter === "release_date.desc" || !filter || sortBy === "release_date.desc") setTitle("New movies")
    else setTitle(`Search for "${filter}"`)

    async function requestDetails(Movies){
      return Promise.all(Movies.map( async (movie, i) => {
        let {id} = movie
        let cast = []
        let genres = configs.genres

        if(id !== 564296){
          let response = await api.use.get(`/movie/${id}/credits?api_key=${api.key}`)
          cast = response.data.cast
        }
        let genre
        movie.genre_ids.forEach(id=>{
          genres.forEach(g=>{
            if(g.id === id){
              if(!genre) genre = g.name
              else genre += ", " + g.name
            }
          })
        })
        movie.genres = genre
        return {movie, cast}
      }))
    }
  }

  return (
    <>
      <header className="header"></header>

      <header className="header header--fixed">
        <figure className="header__logo">
          <img src={logo} alt="Logo" />
        </figure>
        <SearchBar handleSetMovies={handleSetMovies}/>
      </header>

      <section className="section">
        <aside className="section__aside">
          <AsideMenu configs={configs} handleSetMovies={handleSetMovies}/>
        </aside>
        <main className="section__main">
          <Cards configs={configs} title={title} movies={movies}/>
          {/* <Movie/> */}
          {/* <Actor/> */}
        </main>
      </section>

      <footer className="footer">
        <h1 className="footer__made_by">Made by <a target="_blank" rel="noopener noreferrer" href="https://github.com/joaodjtr">João Victor</a><span role="img" aria-label="peace"> ✌</span></h1>
        <p className="footer__credits">Data from <a target="_blank" rel="noopener noreferrer" href="https://www.themoviedb.org/documentation/api">The movieDB API</a> </p>
        <p className="footer__credits">Icons made by <a target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/authors/freepik">Freepik</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/authors/those-icons">Those Icons</a> from  <a target="_blank" rel="noopener noreferrer" href="https://flaticon.com">www.flaticon.com</a></p>
      </footer>
    </>
  );
}

export default App;
