import React, {useState, useEffect} from "react";

import nullPoster from '../../assets/nullposter.png'
import emptyImg from '../../assets/empty.svg'

import './style.scss'

function Cards({configs, movies, title, handleSetPerson, handleSetMovie}) {
  const [baseURL, setBaseURL] = useState('')
  const [posterSize, setPosterSize] = useState('')
  const [backdropSize, setBackdropSize] = useState('')
  useEffect(()=>{
    if(configs.images){
      setBaseURL(configs.images.base_url)
      setPosterSize(configs.images.poster_sizes[4])
      setBackdropSize(configs.images.backdrop_sizes[1])
    }
  },[configs])

  function handleClickMovie(movie){
    handleSetMovie(movie)
  }

  return (
    <article className="main__article">
      <h1 className="article__title">{title}</h1>

      <div className={`article__cards ${movies.length < 1 ? 'article__cards--no_grid' : ""}`}>
        {
          movies.map((movie, i) => {
            let {id,poster_path, title, vote_average, overview, genres} = movie.movie
            let {cast} = movie

            overview = overview.substr(0, 200).concat('...')
            
            let windowWidth = window.innerWidth
            if(windowWidth <= 475) poster_path = movie.movie.backdrop_path
            else poster_path = movie.movie.poster_path
            let rate

            if(vote_average < 6) rate = "rate--low"
            else if(vote_average < 8) rate = "rate--medium"
            else rate = "rate--high"

            return(
              <div key={`${id}-${title}`} className="cards__card">
                  <figure className="movie__poster">
                    <img 
                      src={poster_path ? `${baseURL}${posterSize}${poster_path}` : nullPoster}
                      alt={`${title} poster`}/>
                    
                    <span className={`movie__rate ${rate}`}>{vote_average}</span>
                  </figure>

                  <article className="movie__content">
                    <h3 className="movie__name">{title}</h3>
                    <p className="movie__genre">{genres}</p>
                    <p className="movie__overview">{overview} <span onClick={()=>{handleClickMovie(movie)}} className="movie__overview__seemore">[more]</span></p>
                  </article>
              </div>
            )
          })
        }
        <div className="cards__no_results">
          <figure className="cards__no_results__figure">
            <img src={emptyImg} alt="No results"/>
          </figure>
          <h1 className="cards__no_results__message">Sorry...<br/> we didn't find what you wanted</h1>
        </div>
      
      </div>

    </article>

  );
}

export default Cards;
