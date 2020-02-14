import React, {useState, useEffect} from "react";

import img from "../../assets/beach.jpg";
import close_icon from '../../assets/icons/close.svg'
import closefill_icon from '../../assets/icons/closeFill.svg'
import nullperson from '../../assets/nullperson.png'

import "./style.scss";

function Person({configs, data, handleSetPerson}) {
  const [baseURL, setBaseURL] = useState('')
  const [profileSize, setProfileSize] = useState('')
  const [posterSize, setPosterSize] = useState('')
  
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [bio, setBio] = useState('')
  const [birthplace, setBirthplace] = useState('')
  const [age, setAge] = useState('')

  useEffect(()=>{
    if(configs.images){
      setBaseURL(configs.images.base_url)
      setProfileSize(configs.images.profile_sizes[3])
      setPosterSize(configs.images.poster_sizes[5])
    }
    
  },[configs])

  useEffect(()=>{
    if(data.id){
      setName(data.name)
      setPhoto(data.profile_path)
      setBio(data.biography)
      setBirthplace(data.place_of_birth)
      let dt = new Date()
      let dt2 = new Date(data.birthday)
      let value = (((dt - dt2)/31536000000).toString().match(/^-?\d+(?:\.\d{0,0})?/)[0].replace('.',''))
      setAge(value)
    }
  }, [data])

  function handleCloseButton(){
    handleSetPerson()
  }

  return (
    <div className="full_page person">
      <div className="person__content">

        <div className="full_page__close_button_field">
          <figure onClick={()=>{handleCloseButton()}} className="full_page__close_button_field__figure">
            <img className="close_button_field__figure__img--absolute" src={closefill_icon} alt="Close button"/>
            <img src={close_icon} alt="Close button"/>
          </figure>
        </div>

        <div className="content__person_photo">
          <img src={`${photo ? baseURL+profileSize+photo : nullperson}`} alt={`${name}`} />
        </div>
        <div className="content__person_informations">
          <h1 className="informations__name">{name}</h1>
          <h3 className="informations__birthplace">{birthplace} - {age} years old.</h3>
          <p className="informations__biography">
            {bio}
          </p>
          <div className="informations__footer">
                <h3 className="footer__title">Movies</h3>
                <ul className="footer__frame">
                    <li className="frame__movie">
                        <img src={img} alt="Alt"/>
                        <span className="movie__name">Fancy beach</span>
                    </li>
                    <li className="frame__movie">
                        <img src={img} alt="Alt"/>
                        <span className="movie__name">Fancy beach</span>
                    </li>
                    <li className="frame__movie">
                        <img src={img} alt="Alt"/>
                        <span className="movie__name">Fancy beach</span>
                    </li>
                    <li className="frame__movie">
                        <img src={img} alt="Alt"/>
                        <span className="movie__name">Fancy beach</span>
                    </li>
                    <li className="frame__movie">
                        <img src={img} alt="Alt"/>
                        <span className="movie__name">Fancy beach</span>
                    </li>
                    <li className="frame__movie">
                        <img src={img} alt="Alt"/>
                        <span className="movie__name">Fancy beach</span>
                    </li>
                    <li className="frame__movie">
                        <img src={img} alt="Alt"/>
                        <span className="movie__name">Fancy beach</span>
                    </li>
                </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
