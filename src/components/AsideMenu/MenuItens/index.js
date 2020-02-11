import React from "react";

import trophy_icon from "../../../assets/icons/trophy.svg";
import trophyFill_icon from "../../../assets/icons/trophyFill.svg";
import flame_icon from "../../../assets/icons/flame.svg";
import flameFill_icon from "../../../assets/icons/flameFill.svg";
import chair_icon from "../../../assets/icons/chair.svg";
import chairFill_icon from "../../../assets/icons/chairFill.svg";

function MenuItens({sort_by, handleSetSortBy}) {
  return (
    <>
      <li
        className={`menu__item ${
          sort_by === "popularity.desc" ? "menu__item--checked" : ""
        }`}
        onClick={() => handleSetSortBy("popularity.desc")}
      >
        <span className="menu__item__icon">
          <img
            className="icon--transition"
            src={flameFill_icon}
            alt="Trending"
          />
          <img src={flame_icon} alt="Trending" />
        </span>
        Popularity
      </li>

      <li
        className={`menu__item ${
          sort_by === "vote_average.desc" ? "menu__item--checked" : ""
        }`}
        onClick={() => handleSetSortBy("vote_average.desc")}
      >
        <span className="menu__item__icon" role="img">
          <img
            className="icon--transition"
            src={trophyFill_icon}
            alt="Rating"
          />
          <img src={trophy_icon} alt="Rating" />
        </span>
        Rating
      </li>

      <li
        className={`menu__item ${
          sort_by === "release_date.desc" ? "menu__item--checked" : ""
        }`}
        onClick={() => handleSetSortBy("release_date.desc")}
      >
        <span className="menu__item__icon">
          <img
            className="icon--transition"
            src={chairFill_icon}
            alt="New releases"
          />
          <img src={chair_icon} alt="New releases" />
        </span>
        New releases
      </li>
    </>
  );
}

export default MenuItens
