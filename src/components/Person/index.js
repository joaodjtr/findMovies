import React, {useState, useEffect} from "react";

import img from "../../assets/beach.jpg";
import close_icon from '../../assets/icons/close.svg'
import nullposter from '../../assets/nullposter.png'
import nullperson from '../../assets/nullperson.png'
import pin from '../../assets/icons/pin.svg'

import "./style.scss";
import api from "../../services/api";

function Person({configs, data, handleSetPerson, handleSetMovie, requestMovieDetails}) {
  const [baseURL, setBaseURL] = useState('')
  const [profileSize, setProfileSize] = useState('')
  const [posterSize, setPosterSize] = useState('')
  const [backdropSize, setBackdropSize] = useState('')

  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [bio, setBio] = useState('')
  const [birthplace, setBirthplace] = useState('')
  const [age, setAge] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    if(configs.images){
      setBaseURL(configs.images.base_url)
      setProfileSize(configs.images.profile_sizes[3])
      setPosterSize(configs.images.poster_sizes[3])
      setBackdropSize(configs.images.backdrop_sizes[1])
    }
    
  },[configs])

  useEffect(()=>{
    if(data.id){
      setName(data.name)
      setPhoto(data.profile_path)
      setBio(data.biography)
      setBirthplace(data.place_of_birth)
      
      if(data.place_of_birth === null || !data.place_of_birth) setBirthplace('')
      else setBirthplace(data.place_of_birth)

      if(data.birthday === null || !data.birthday) setAge('')
      else{
        let dt = new Date()
        let dt2 = new Date(data.birthday)
        let value = (((dt - dt2)/31536000000).toString().match(/^-?\d+(?:\.\d{0,0})?/)[0].replace('.',''))
        setAge(value)
      }

      async function getMovieData(){
        let movieData = await api.use(`/discover/movie?with_cast=${data.id}&sort_by=popularity.desc&api_key=${api.key}`)
        let movieArray = Array.from(movieData.data.results)
        setMovies(await requestMovieDetails(movieArray))
      }

      getMovieData()
    }
  }, [data])

  function handleCloseButton(){
    handleSetPerson()
  }

  function handleClickMovie(movie){
    handleSetPerson()
    handleSetMovie(movie)
  }

  return (
    <div className="full_page person">
      <div className="person__content">

        <div className="full_page__close_button_field">
          <figure onClick={()=>{handleCloseButton()}} className="full_page__close_button_field__figure">
            <img src={close_icon} alt="Close button"/>
          </figure>
        </div>

        <div className="content__person_photo">
          <img src={`${photo ? baseURL+profileSize+photo : nullperson}`} alt={`${name}`} />
        </div>
        <div className="content__person_informations">
          <h1 className="informations__name">{name}</h1>
          {
            birthplace !== "" || age !== "" ? <h3 className="informations__birthplace">
              {birthplace !== "" ? <><img src={pin} alt="Pin icon"/> {birthplace}</> : ""} {age !== "" && `${birthplace}` !== "" ? "-" : ""} {age !== "" ? `${age} years old.` : ""}</h3> : ""
          }
          {
            bio === ""
            ? <p className="informations__biography informations__biography--no_biography">We didn't found any biographies of this person.</p>
            : <><h3 className="informations__topic_title">Biography</h3>  <p className="informations__biography">{bio}</p></>
          }
          <div className="informations__footer">
                <h3 className="informations__topic_title">Movies</h3>
                <ul className="footer__frame">

                    {
                      movies.length > 0 ? movies.map((item,i)=>{
                        let {poster_path, title, overview, genres} = item.movie

                        let windowWidth = window.innerWidth
                        if(windowWidth <= 420) poster_path = item.movie.backdrop_path
                        else poster_path = item.movie.poster_path

                        return(
                        <li key={`${item.movie.id+"mini"+i}`} className="frame__mini_movie">
                          <figure className="mini_movie__poster">
                            <img src={`${poster_path ? baseURL+posterSize+poster_path : nullposter}`} alt={`${title}`}/>
                          </figure>
                          <div className="mini_movie__content">
                            <h1 className="mini_movie__content__title">{title}</h1>
                            <p className="mini_movie__content__genres">{genres}</p>
                            <p className="mini_movie__content__overview">{overview.substring(0,120).concat('...')}<span onClick={()=>{handleClickMovie(item)}} className="mini_movie__seemore">[more]</span></p>
                          </div>
                        </li>
                        )
                      }) : ""
                    }
                </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
