import React from "react";

import './style.scss'

function Cards() {

    let data = `An apocalyptic story set in the furthest reaches of our planet,
    in a stark desert landscape where humanity is broken, and most
    everyone is crazed fighting for the necessities of life. Within
    this world exist two rebels on the run who just might be able to
    restore order.`

    data = data.substr(0,200).concat("...")

  return (

    <article className="main__article">
      <h1 className="article__title">Popular movies</h1>

      <div className="article__cards">

        <div className="card">
          <div className="card__movie">
            <figure className="movie__poster">
              <img
                src="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
                alt="Mad max"
              />
              <span className="movie__rate rate--high">8.9</span>
            </figure>

            <article className="movie__content">
              <h3 className="movie__name">Mad Max Fury Road</h3>
              <p className="movie__genre">Action, Adventure, Sci-Fi</p>
              <p className="movie__overview">
                {data}
              </p>
            </article>
          </div>

          <div className="card__movie_footer">
            <ul className="footer__cast">
              <li className="cast__actor">
                <img
                  src="https://image.tmdb.org/t/p/original/gQbHq8Mz4KO3E8yT2EfgllpzIx2.jpg"
                  alt="Tom Hardy"
                />
                <span className="actor__name">Tom Hardy Kelvin</span>
              </li>
              <li className="cast__actor">
                <img
                  src="https://image.tmdb.org/t/p/original/k5Xt2mNlraX7yHYaPy9gvayCaKV.jpg"
                  alt="Charlize Theron"
                />
                <span className="actor__name">Charlize Theron</span>
              </li>
              <li className="cast__actor">
                <img
                  src="https://image.tmdb.org/t/p/original/h1gXgpuXERZTVhxMdjT7uvXIyq6.jpg"
                  alt="Nicholas Hoult"
                />
                <span className="actor__name">Nicholas Hoult</span>
              </li>
              <li className="cast__actor">
                <img
                  src="https://image.tmdb.org/t/p/original/h1gXgpuXERZTVhxMdjT7uvXIyq6.jpg"
                  alt="Nicholas Hoult"
                />
                <span className="actor__name">Nicholas Hoult</span>
              </li>
              <li className="cast__actor">
                <img
                  src="https://image.tmdb.org/t/p/original/h1gXgpuXERZTVhxMdjT7uvXIyq6.jpg"
                  alt="Nicholas Hoult"
                />
                <span className="actor__name">Nicholas Hoult</span>
              </li>
              <li className="cast__actor">
                <img
                  src="https://image.tmdb.org/t/p/original/h1gXgpuXERZTVhxMdjT7uvXIyq6.jpg"
                  alt="Nicholas Hoult"
                />
                <span className="actor__name">Nicholas Hoult</span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    
    </article>

  );
}

export default Cards;
