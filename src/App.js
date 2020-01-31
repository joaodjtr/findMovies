import React from 'react';
import './styles/App.scss'

import Cards from './components/Cards'

import logo from './assets/logo.png'
import searchIcon from './assets/search.svg'

function App() {
  return(
    <>
      <header className="header"></header>

      <header className="header header--fixed">
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

      <section className="section">
        <aside className="section__aside">
          <div className="aside__content">

          </div>
        </aside>
        <main className="section__main">

          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          
        </main>
      </section>
    </>
  )
}

export default App;
