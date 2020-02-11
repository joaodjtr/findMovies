import React from "react";

function GenresItens({ genres, handleSetGenre }) {
  function handleClick(event) {
    let pressed = true
    if(!event.target.checked) pressed = false
    handleSetGenre(event.target.value, pressed)
  }

  return (
    <>
      {genres.map(genre => (
        <li key={genre.name + genre.id} className="menu__item menu__item--checkbox">
          <input
            type="checkbox"
            id={genre.name}
            name="genre-movie"
            onClick={handleClick}
            value={genre.id}
          />
          <label htmlFor={genre.name} className="checkbox__label">
            {genre.name}
          </label>
        </li>
      ))}
    </>
  );
}

export default GenresItens;
