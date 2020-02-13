import React, { useState, useEffect } from "react";

import "./style.scss";

import api from '../../services/api.js'

import searchIcon from "../../assets/icons/search.svg";

function SearchBar({handleSetMovies}) {
  const [search, setSearch] = useState(" ")

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

  return (
    <>
      <div className="header__search_bar">
        <div className="search_bar__field">
          <img src={searchIcon} alt="search icon" />
          <input
            onInput={handleChange}
            placeholder="Search for movies..."
            type="text"
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
