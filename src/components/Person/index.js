import React, {useState, useEffect} from "react";

import img from "../../assets/beach.jpg";
import close_icon from '../../assets/icons/close.svg'
import closefill_icon from '../../assets/icons/closeFill.svg'
import nullperson from '../../assets/nullperson.png'
import pin from '../../assets/icons/pin.svg'

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
      
      if(data.place_of_birth === null || !data.place_of_birth) setBirthplace('')
      else setBirthplace(data.place_of_birth)

      if(data.birthday === null || !data.birthday) setAge('')
      else{
        let dt = new Date()
        let dt2 = new Date(data.birthday)
        let value = (((dt - dt2)/31536000000).toString().match(/^-?\d+(?:\.\d{0,0})?/)[0].replace('.',''))
        setAge(value)
      }
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
