import React, {useState, useEffect} from "react";
import api from '../../services/api'

import './style.scss'

import MenuItens from './MenuItens'
import GenresItens from './GenresItens'


function AsideMenu({handleSetMovies, configs}) {
  const [movies, setMovies] = useState([])
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
      setMovies(await requestDetails(data.results))
      
      async function requestDetails(Movies){
        return Promise.all(Movies.map( async (movie, i) => {
          let {id} = movie
          let cast = []
          if(id !== 564296){
            let response = await api.use.get(`/movie/${id}/credits?api_key=${api.key}`)
            cast = response.data.cast
          }
        let genre
          movie.genre_ids.map(id=>{
            genres.map(g=>{
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

  }, [sort_by,setMovies, genres, pressedGenres])

  useEffect(()=>{
    handleSetMovies(movies, sort_by)
  },[movies])

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
  );
}

export default AsideMenu;
