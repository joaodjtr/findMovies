import React, {useState, useEffect} from "react";

import nullPoster from '../../assets/nullposter.png'
import nullPerson from '../../assets/nullperson.png'
import emptyImg from '../../assets/empty.svg'

import './style.scss'

function Cards({configs, movies, title, handleSetPerson}) {
  const [baseURL, setBaseURL] = useState('')
  const [posterSize, setPosterSize] = useState('')

  useEffect(()=>{
    if(configs.images){
      setBaseURL(configs.images.base_url)
      setPosterSize(configs.images.poster_sizes[4])
    }
  },[configs])

  function handleClick(idPerson){
    handleSetPerson(idPerson)
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
            let rate

            if(vote_average < 6) rate = "rate--low"
            else if(vote_average < 8) rate = "rate--medium"
            else rate = "rate--high"

            return(
              <div key={`${id}-${title}`} className="cards__card">
                <div className="card__movie">

                  <figure className="movie__poster">
                    <img 
                      src={poster_path ? `${baseURL}${posterSize}${poster_path}` : nullPoster}
                      alt={`${title} poster`}/>
                    <span className={`movie__rate ${rate}`}>{vote_average}</span>
                  </figure>

                  <article className="movie__content">
                    <h3 className="movie__name">{title}</h3>
                    <p className="movie__genre">{genres}</p>
                    <p className="movie__overview">{overview}</p>
                  </article>
                </div>
                <div className="card__movie_footer">
                  <ul className="footer__cast">
                    {
                      cast.map((person, j)=>{
                        let idPerson = person.id
                        let {name, profile_path} = person
                        if(j < 5) {
                        return (
                          <li onClick={()=>handleClick(idPerson)} key={`${id}-${name}-${j}`} className="cast__person">
                            <img 
                              src={profile_path ? `${baseURL}original/${profile_path}` : nullPerson}
                              alt={name}/>
                            <span className="person__name">{ name }</span>
                          </li>
                        )
                        }
                      })
                    }
                  </ul>
                </div>
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
