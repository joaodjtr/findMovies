import React, {useState, useEffect} from "react";

import "./style.scss";

import close_icon from '../../assets/icons/close.svg'
import nullperson from '../../assets/nullperson.png'
import nullposter from '../../assets/nullposter.png'

function Movie({data, configs, handleSetMovie, handleSetPerson}) {
  const [baseURL, setBaseURL] = useState('')
  const [profileSize, setProfileSize] = useState('')
  const [posterSize, setPosterSize] = useState('')
  
  const [title, setTitle] = useState('')
  const [photo, setPhoto] = useState('')
  const [genres, setGenres] = useState('')
  const [overview, setOverview] = useState('')
  const [voteAverage, setVoteAverage] = useState(null)
  const [rate, setRate] = useState('')
  const [cast, setCast] = useState([])

  useEffect(()=>{
    if(voteAverage < 6) setRate("rate--low")
    else if(voteAverage < 8) setRate("rate--medium")
    else if(voteAverage <= 10) setRate("rate--high")
  },[voteAverage])

  useEffect(()=>{
    if(configs.images){
      setBaseURL(configs.images.base_url)
      setProfileSize(configs.images.profile_sizes[2])
      setPosterSize(configs.images.backdrop_sizes[3])
    }
  },[configs])

  useEffect(()=>{
    if(data.movie){
      let {movie} = data
      setTitle(movie.title)
      setPhoto(movie.backdrop_path)
      setOverview(movie.overview)
      setGenres(movie.genres)
      setVoteAverage(movie.vote_average)
      setCast(data.cast)
    }
  }, [data])

  function handleClickPerson(idPerson){
    handleSetPerson(idPerson)
  }

  function handleCloseButton(){
    handleSetMovie()
  }

  return (
    <div className="full_page movie">
      <article className="movie__content">

        <div className="full_page__close_button_field">
          <figure onClick={()=>{handleCloseButton()}} className="full_page__close_button_field__figure">
            <img src={close_icon} alt="Close button"/>
          </figure>
        </div>

        <figure className="content__poster">
          <img src={`${photo ? baseURL+posterSize+photo : nullposter}`} alt={`${title}`} />
          {
          }
          <span className={`poster__rate ${rate}`}>{voteAverage}</span>
        </figure>
        <div className="content__informations">
          <h1 className="informations__title">{title}</h1>
          <h3 className="informations__genre">{genres}</h3>
          <h3 className="informations__topic_title">Overview</h3>
          <p className="informations__overview">{overview}</p>
          <div className="informations__footer">
            <h3 className="informations__topic_title">Cast</h3>
            <ul className="footer__frame">
              {
                cast.map((person,i) => (
                  <li key={person.id + " " + i} className="frame__actor" onClick={()=>{handleClickPerson(person.id)}}>
                    <img src={ person.profile_path ? baseURL+profileSize+person.profile_path : nullperson} alt={person.name}/>
                    <span className="actor__name">{person.name}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Movie;
