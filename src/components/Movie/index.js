import React from "react";

import "./style.scss";

import img from "../../assets/beach.jpg";
import me from "../../assets/me.jpg";

function Movie() {
  return (
    <div className="full_page movie">
      <article className="movie__content">
        <figure className="content__poster">
          <img src={img} alt="teste" />
          <span className="poster__rate rate--medium">7.6</span>
        </figure>
        <div className="content__informations">
          <h1 className="informations__title">Avengers - Endgame</h1>
          <h3 className="informations__genre">Action, Adventure, Sci-fi</h3>
          <p className="informations__overview">
            Ullamco sunt ullamco enim proident officia pariatur minim aliquip
            voluptate minim. Eiusmod ipsum elit ea pariatur quis do. Cupidatat
            incididunt magna veniam laborum cillum enim culpa cillum culpa ex
            incididunt. Commodo excepteur Lorem deserunt enim consectetur.
            Laboris elit nostrud duis nulla sit sunt velit duis laboris sunt
            commodo consequat qui pariatur.
            <br />
            Commodo dolore amet esse ad commodo velit. Incididunt qui ea dolore
            et commodo qui ullamco ullamco velit fugiat qui qui officia esse.
            Fugiat dolor reprehenderit ea esse cillum duis magna. Occaecat minim
            consectetur laborum pariatur amet. Elit esse aute ipsum aute aliquip
            ex enim cupidatat. Voluptate irure dolor laboris esse cillum
            deserunt qui Lorem aliquip minim dolore do exercitation laborum.
          </p>
          <div className="informations__footer">
            <h3 className="footer__title">Cast</h3>
            <ul className="footer__frame">
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
              <li className="frame__actor">
                <img src={me} alt="me" />
                <span className="actor__name">João Victor</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Movie;
