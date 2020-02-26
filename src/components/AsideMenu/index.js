import React, {useState, useEffect} from "react";
import api from '../../services/api'

import './style.scss'

import MenuItens from './MenuItens'
import GenresItens from './GenresItens'


function AsideMenu({handleSetMovies, configs, showAsideMenu}) {
  const [sort_by, setSortBy] = useState('popularity.desc')
  const [genres, setGenres] = useState({})
  const [renderGenres, setRenderGenres] = useState(false)
  const [pressedGenres, setPressedGenres] = useState([])

  useEffect(()=>{
    if(configs.genres){
      setGenres(configs.genres)
      setRenderGenres(true)
    }
  },[configs])

  useEffect(()=>{
    if(genres.length > 0) requestMovies(sort_by)

    async function requestMovies(sort_by){
      let strGenres = ""
      pressedGenres.forEach(genre => {
        strGenres += ","  + genre
      })
      let {data} = await api.use.get(`/discover/movie?api_key=${api.key}&sort_by=${sort_by}&${sort_by === "vote_average.desc" ? "vote_count.gte=1500" : ""}${sort_by === "release_date.desc" ? "vote_count.gte=100" : ""}&with_genres=${strGenres}`)
      handleSetMovies(data.results, sort_by, sort_by, strGenres)
    }

  }, [sort_by, genres, pressedGenres])

  function handleSetSortBy(value){
    setSortBy(value)
  }

  function handleSetGenre(value, pressed){
    let set = true
    let remove = !pressed
    
    pressedGenres.forEach(genre => {
      if(genre === value) set = false
    })

    if(set) setPressedGenres([...pressedGenres, value])
    else if(!set && remove){
      let actualGenres = pressedGenres.filter(genre => {
        return genre !== value
      })
      setPressedGenres(actualGenres)
    }
  }

  return (
    <aside className={`section__aside ${showAsideMenu ? 'section__aside--mobile_visible' : ''}`}>
      <div className="aside__content">
        <ul className="aside__menu">
          <h4 className="aside__menu__title">Main</h4>

          <MenuItens sort_by={sort_by} handleSetSortBy={handleSetSortBy}/>

          <h4 className="aside__menu__title">Genre</h4>
          
          {
            renderGenres ? <GenresItens genres={genres} handleSetGenre={handleSetGenre}/> : ""
          }
        </ul>
      </div>
    </aside>
  );
}

export default AsideMenu;
