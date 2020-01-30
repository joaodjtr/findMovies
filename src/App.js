import React from 'react';
import './styles/css/App.css'

import logo from './assets/logo.png'
import searchIcon from './assets/search.svg'

function App() {
  return(
    <>
      <header className="header">
        <figure className="header__logo">
          <img src={logo} alt="Logo"/>
        </figure>
        <div className="header__search_bar">
          <div className="search_bar__field">
            <img src={searchIcon} alt="search icon"/>
            <input placeholder="Search movies..." type="text"/> 
          </div>
        </div>
      </header>

      <article className="article">
        <aside className="article__aside">

        </aside>
        <main className="article__main">

        </main>
      </article>
    </>
  )
}

export default App;
