import React from 'react';
import MotivatedPhoto from './images/motivated.svg';
import DynamicPhoto from './images/dynamic.svg';
import ConfidentPhoto from './images/confident.svg';


function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="nav__title">Sholomon Pinoliad</div>
        <div className="nav__navigation">
          <ul className="nav__navigation--list">
            <a href="#">
              <li className="items">Home</li>
            </a>
            <a href="#">
              <li className="items">About</li>
            </a>
            <a href="#">
              <li className="items">Projects</li>
            </a>
            <a href="#">
              <li className="items">Contact Me</li>
            </a>
            <a href="#">
              <li className="highlight">Resume</li>
            </a>
          </ul>
        </div>
      </nav>
      <header className="header">
        <div className="header__image"></div>
        <div className="header__information">
          <div className="header__information--container">
            <h1>I am Sholomon Pinoliad</h1>  
            <h2>Motivated, Outgoing, Confident</h2>
          </div>
        </div>
      </header>
      <section className="section full-height">
        <div className="section__container">
          <div className="section__container--image" style={{ backgroundImage: `url (${MotivatedPhoto})` }}></div>
        
        </div>
        <div className="section__container">
          <h1 className="section__container--h1">Motivated</h1>
          <h2 className="section__container--h2">
            Motivated in making things possible by turning visions into reality.
          </h2>
        </div>
      </section>
      <section className="section full-height">
        <div className="section__container">
          <div className="section__container--image" style={{ backgroundImage: `url ('https://monpinoliad.github.io/static/media/motivated.66df8206.svg')` }}></div>
        
        </div>
        <div className="section__container">
          <h1 className="section__container--h1">Dynamic</h1>
          <h2 className="section__container--h2">
            I am a positive and energetic person who continuously learn something new.
          </h2>
        </div>
      </section>
      <section className="section full-height">
        <div className="section__container">
          <div className="section__container--image" style={{ backgroundImage: `url ('https://monpinoliad.github.io/static/media/motivated.66df8206.svg')` }}></div>
        
        </div>
        <div className="section__container">
          <h1 className="section__container--h1">Confident</h1>
          <h2 className="section__container--h2">
            Confident enough with my skills to empower every person.
          </h2>
        </div>
      </section>
    </div>
  );
}

export default App;
