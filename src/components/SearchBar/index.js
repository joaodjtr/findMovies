import React, { useState, useEffect } from "react";

import "./style.scss";

import api from '../../services/api.js'

import searchIcon from "../../assets/icons/search.svg";
import menu from '../../assets/icons/menu.svg'

function SearchBar({handleSetMovies}) {
  const [search, setSearch] = useState(" ")
  const [showSearch, setShowInput] = useState(false) 
  useEffect(()=>{
    async function searchMovie(value){
        if(value.length > 0 && value !== " "){
            let {data} = await api.use.get(`search/movie?api_key=${api.key}&query=${value}&language=en-US&include_adult=false`)
            handleSetMovies(data.results, value)
        }else if(value.length < 1){
            handleSetMovies()
        }
    }    
    searchMovie(search)
  },[search])

  let timeout = null

  function handleChange(event) {
    let {value} = event.target
    if(timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
        setSearch(value)
    },1000)
  }

  function toggleSearchBar(){
    let windowWidth = window.innerWidth
    if(windowWidth <= 755) setShowInput(!showSearch)
  }

  return (
    <>
      <div className={`header__search_bar ${ showSearch ?  "search_bar--fullwidth" : ""}`}>
        <div className={`search_bar__field `} >
          <img src={searchIcon} alt="search icon" onClick={toggleSearchBar}/>
          <input
            onInput={handleChange}
            placeholder="Search for movies..."
            type="text"
          />
          <img src={menu} alt="menu icon" className="search_bar__icon--none"/>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
