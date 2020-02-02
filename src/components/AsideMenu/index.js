import React, {useState, useEffect} from "react";
import api from '../../services/api'

import './style.scss'

import trophy_icon from "../../assets/icons/trophy.svg";
import trophyFill_icon from "../../assets/icons/trophyFill.svg";
import flame_icon from "../../assets/icons/flame.svg";
import flameFill_icon from "../../assets/icons/flameFill.svg";
import chair_icon from "../../assets/icons/chair.svg";
import chairFill_icon from "../../assets/icons/chairFill.svg";

function AsideMenu({handleSetMovies}) {
  const [movies, setMovies] = useState([])
  const [sort_by, setSortBy] = useState('popularity.desc')
  
  function handleSetMovies(handledSortBy){
    setSortBy(handledSortBy)
  }

  const api_key = "6ced056b0cb72f6bbce6b75bef270846"
  
  useEffect(()=>{
    console.log(sort_by)
    requestMovies(sort_by)

    async function requestMovies(sort_by){
      let {data} = await api.get(`/discover/movie?api_key=${api_key}&sort_by=${sort_by}`)

      setMovies(await requestDetails(data.results))
      
      async function requestDetails(Movies){
        return Promise.all(Movies.filter( async (movie,i) => {
          let {id} = movie
          
          if(id !== 564296){
            let response = await api.get(`/movie/${id}/credits?api_key=${api_key}`)
            let {cast} = response.data
            return {movie, cast}
          }
        }))
      }
    }
  }, [sort_by,setMovies])

  useEffect(()=>{
    console.log(movies)
  },[movies])

  return (
      <div className="aside__content">
        <ul className="aside__menu">
          <h4 className="aside__menu__title">Main</h4>

          <li className="menu__item" onClick={() => setSortBy("popularity.desc")}>
            <span className="menu__item__icon">
              <img
                className="icon--transition"
                src={flameFill_icon}
                alt="Trending"
              />
              <img src={flame_icon} alt="Trending" />
            </span>
            Popularity
          </li>

          <li className="menu__item" onClick={() => setSortBy("vote_average.desc")}>
            <span className="menu__item__icon" role="img">
              <img
                className="icon--transition"
                src={trophyFill_icon}
                alt="Rating"
              />
              <img src={trophy_icon} alt="Rating" />
            </span>
            Rating
          </li>
          
          <li className="menu__item" onClick={() => setSortBy("release_date.desc")}>
            <span className="menu__item__icon">
              <img
                className="icon--transition"
                src={chairFill_icon}
                alt="New releases"
              />
              <img src={chair_icon} alt="New releases" />
            </span>
            New releases
          </li>

          <h4 className="aside__menu__title">Genre</h4>
          <li className="menu__item menu__item--checkbox">
            <input type="checkbox" id="adventure" name="genre-movie"/>
            <label htmlFor="adventure" className="checkbox__label">Adventure</label>
          </li>
          <li className="menu__item menu__item--checkbox">
            <input type="checkbox" id="action"/>
            <label htmlFor="action" className="checkbox__label">Action</label>
          </li>
        </ul>
      </div>
  );
}

export default AsideMenu;
