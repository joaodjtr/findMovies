import React from "react";

import img from "../../assets/beach.jpg";
import me from "../../assets/me.jpg";

import "./style.scss";

import { render } from "@testing-library/react";

function Actor() {
  return (
    <div className="full_page actor">
      <div className="actor__content">
        <div className="content__actor_photo">
          <img src={me} alt="João Victor" />
        </div>
        <div className="content__actor_informations">
          <h1 className="informations__name">João Victor</h1>
          <h3 className="informations__age">17 years old</h3>
          <p className="informations__biography">
            Laboris anim adipisicing labore dolor. Veniam minim enim officia
            sunt quis consectetur do id nulla ut sunt anim. Aliqua sit
            reprehenderit enim laborum laborum sint pariatur aute eiusmod ad et
            deserunt veniam deserunt.
            <br />
            Fugiat nisi culpa magna exercitation nostrud esse anim excepteur
            consequat culpa quis et nulla. Minim ea veniam aliqua aliquip. Do et
            elit minim ad anim tempor ex eiusmod ipsum qui eiusmod deserunt
            irure. Officia amet aute non commodo. In consectetur tempor enim sit
            magna.
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

export default Actor;
