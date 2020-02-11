import React, {useState, useEffect} from "react";

import nullPoster from '../../assets/nullposter.png'
import nullActor from '../../assets/nullactor.png'

import './style.scss'

function Cards({configs, movies, title}) {
  const [baseURL, setBaseURL] = useState('')
  const [posterSize, setPosterSize] = useState('')

  useEffect(()=>{
    if(configs.images){
      setBaseURL(configs.images.base_url)
      setPosterSize(configs.images.poster_sizes[4])
    }
  },[configs])

  return (
    <article className="main__article">
      <h1 className="article__title">{title}</h1>

      <div className="article__cards">

        {
          movies.map(movie => {
            let {id,poster_path, title, vote_average, overview, genres} = movie.movie
            let {cast} = movie
            overview = overview.substr(0, 200).concat('...')
            let rate

            if(vote_average < 6) rate = "rate--low"
            else if(vote_average < 8) rate = "rate--medium"
            else rate = "rate--high"

            return(
              <div key={id} className="card">
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
                      cast.map((actor, i)=>{
                        if(i < 5) {
                        return (
                          <li key={actor.name} className="cast__actor">
                            <img 
                              src={actor.profile_path ? `${baseURL}original/${actor.profile_path}` : nullActor}
                              alt={actor.name}/>
                            <span className="actor__name">{ actor.name }</span>
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
      
      </div>

    </article>

  );
}

export default Cards;
