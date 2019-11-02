import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import MotivatedPhoto from './images/motivated.svg'
import DynamicPhoto from './images/dynamic.svg'
import ConfidentPhoto from './images/confident.svg'

import ProjectSmdi from './images/projects/smdi.png'
import ProjectRey from './images/projects/rey.png'
import ProjectJimmy from './images/projects/jimmy.png'
import ProjectEl from './images/projects/elpower.png'

import FooterEnvelope from './images/close-envelope.svg'
import FooterInstagram from './images/instagram.svg'
import FooterLinkedin from './images/linkedin-logo.svg'
import FooterGithub from './images/github-logo.svg'

import Resume from './resume/PINOLIAD_RESUME_REAL_october28-19.pdf'

class App extends React.Component {

  componentDidMount() {
    let nav = document.querySelector(".nav__burger");
    nav.addEventListener("click", this.navigator)
    document.addEventListener("scroll", this.scrollSpy, { passive: true })
    window.addEventListener("resize", this.screenWidth, { passive: true })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollSpy);
  }

  screenWidth(event) {
    let navigation = document.querySelector(".nav__navigation")
    if(window.innerWidth>968) 
      navigation.classList.add("show_nav")
    else
      navigation.classList.remove("show_nav")
  }

  navigator(event) {
    let navigation = document.querySelector(".nav__navigation")
    if(!navigation.classList.contains("show_nav"))
      navigation.classList.add("show_nav")
    else
      navigation.classList.remove("show_nav")
  }
 
  scrollSpy(event) {
    let home = document.querySelector("#home");
    let about = document.querySelector("#about");
    let projects = document.querySelector("#projects");
    let contact = document.querySelector("#contact");

    if(document.scrollingElement.scrollTop >= home.offsetTop && document.scrollingElement.scrollTop < home.offsetTop + home.offsetHeight)
    {
      document.querySelector(".n-home").classList.add("active");
      document.querySelector(".n-about").classList.remove("active");
      document.querySelector(".n-projects").classList.remove("active");
      document.querySelector(".n-contact").classList.remove("active");
    }
    if(document.scrollingElement.scrollTop >= about.offsetTop && document.scrollingElement.scrollTop < about.offsetTop + about.offsetHeight)
    {
      document.querySelector(".n-home").classList.remove("active");
      document.querySelector(".n-about").classList.add("active");
      document.querySelector(".n-projects").classList.remove("active");
      document.querySelector(".n-contact").classList.remove("active");
    }
    if(document.scrollingElement.scrollTop >= projects.offsetTop && document.scrollingElement.scrollTop < projects.offsetTop + projects.offsetHeight)
    {
      document.querySelector(".n-home").classList.remove("active");
      document.querySelector(".n-about").classList.remove("active");
      document.querySelector(".n-projects").classList.add("active");
      document.querySelector(".n-contact").classList.remove("active");
    }
    if(document.scrollingElement.scrollTop >= contact.offsetTop && document.scrollingElement.scrollTop < contact.offsetTop + contact.offsetHeight)
    {
      document.querySelector(".n-home").classList.remove("active");
      document.querySelector(".n-about").classList.remove("active");
      document.querySelector(".n-projects").classList.remove("active");
      document.querySelector(".n-contact").classList.add("active");
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <div className="nav__title">Sholomon Pinoliad</div>
          <div className="nav__navigation">
            <ul className="nav__navigation--list">
              <a href="#home">
                <li className="items n-home active">Home</li>
              </a>
              <a href="#about">
                <li className="items n-about">About</li>
              </a>
              <a href="#projects">
                <li className="items n-projects">Projects</li>
              </a>
              <a href="#contact">
                <li className="items n-contact">Contact Me</li>
              </a>
              <a href={{link: Resume}} target="_new">
                <li className="highlight">Resume</li>
              </a>
            </ul>
          </div>
          <div className="nav__burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
        <header className="header" id="home">
          <Fade left>
            <div className="header__image"></div>
          </Fade>
          <Fade right>
            <div className="header__information">
              <div className="header__information--container">
                <h1>I am Sholomon Pinoliad</h1>  
                <h2>Motivated, Outgoing, Confident</h2>
              </div>
            </div>
          </Fade>
        </header>
        <section className="section full-height">
          <Fade left>
            <div className="section__container">
              <img src={MotivatedPhoto} className="section__container--image" alt="logo" />
            </div>
          </Fade>
          <Fade right>
            <div className="section__container">
              <h1 className="section__container--h1">Motivated</h1>
              <h2 className="section__container--h2">
                Motivated in making things possible by turning visions into reality.
              </h2>
            </div>
          </Fade>
        </section>
        <section className="section full-height">
          <Fade left>
            <div className="section__container">
              <img src={DynamicPhoto} className="section__container--image" alt="logo" />
            </div>
          </Fade>
          <Fade right>
            <div className="section__container">
              <h1 className="section__container--h1">Dynamic</h1>
              <h2 className="section__container--h2">
                I am a positive and energetic person who continuously learn something new.
              </h2>
            </div>
          </Fade>
        </section>
        <section className="section full-height">
          <Fade left>
            <div className="section__container">
              <img src={ConfidentPhoto} className="section__container--image" alt="logo" />
            </div>
          </Fade>
          <Fade right>
            <div className="section__container">
              <h1 className="section__container--h1">Confident</h1>
              <h2 className="section__container--h2">
                Confident enough with my skills to empower every person.
              </h2>
            </div>
          </Fade>
        </section>
        <section className="section gradient" id="about">
          <div className="section__curve">
            <div className="curve-top"></div>
          </div>
          <p className="section__paragraph-large">
          Mon is a motivated, dynamic, and confident person who has a great passion for technology and motivated in making things possible by turning visions into reality.
          <br /><br />
          He is interested in multiple courses like Machine Learning, Cloud, DevOps. He also wants to share his knowledge by conducting workshops and seminars or by being a resource speaker.
          <br /><br />
          Currently, he is working as IT Web Support Engineer for Cloud Applications in Oracle NetSuite Philippines Corporation
          </p>
        </section>
        <section className="project-section" id="projects">
          <h1 className="project-section__header">Projects and Stuffs</h1>
          <div className="project-section__content">
            <Zoom>
              <div className="project-section__content--item" style={{ backgroundImage: `url(${ProjectSmdi})` }}>
                <div className="project-section__content--item__shadow">
                  <h1>SMDI Website Development</h1>
                </div>
              </div>
            </Zoom>
            <Zoom>
              <div className="project-section__content--item" style={{ backgroundImage: `url(${ProjectJimmy})` }}>
                <div className="project-section__content--item__shadow">
                  <h1>Jimmys Lambanog Web Design</h1>
                </div>
              </div>
            </Zoom>
            <Zoom>
              <div className="project-section__content--item" style={{ backgroundImage: `url(${ProjectRey})` }}>
                <div className="project-section__content--item__shadow">
                  <h1>Rey Industrial Web Design</h1>
                </div>
              </div>
            </Zoom>
            <Zoom>
              <div className="project-section__content--item" style={{ backgroundImage: `url(${ProjectEl})` }}>
                <div className="project-section__content--item__shadow">
                  <h1>El Power Tools Web Design</h1>
                </div>
              </div>
            </Zoom>
          </div>
        </section>
        <footer className="footer" id="contact">
          <Fade left>
            <div className="footer__content">
              <div className="footer__content--box">
                <h1>Do you have more questions?</h1>
                <h2>You can reach me out through my social media accounts or personal email.</h2>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="footer__content">
              <div className="footer__content--box">
                <div className="footer__content--box__row">
                  
                  <img src={FooterEnvelope} className="footer__content--box__row--icon" alt="logo" />
                  <div className="footer__content--box__row--text">sholomon.pinoliad@gmail.com</div>
                </div>
              </div>
              <div className="footer__content--box">
                <div className="footer__content--box__row">
                  
                  <img src={FooterLinkedin} className="footer__content--box__row--icon" alt="logo" />
                  <div className="footer__content--box__row--text">/sholomon</div>
                </div>
              </div>
              <div className="footer__content--box">
                <div className="footer__content--box__row">
                  
                  <img src={FooterInstagram} className="footer__content--box__row--icon" alt="logo" />
                  <div className="footer__content--box__row--text">@heytransit</div>
                </div>
              </div>
              <div className="footer__content--box">
                <div className="footer__content--box__row">
                  
                  <img src={FooterGithub} className="footer__content--box__row--icon" alt="logo" />
                  <div className="footer__content--box__row--text">/monpinoliad</div>
                </div>
              </div>
            </div>
          </Fade>
        </footer>
        <footer className="copyright">
          &copy; Copyright 2019. All Rights Reserved. Icons from <strong><a href="https://www.flaticon.com/">Flaticon</a></strong>.
        </footer>
      </div>
    );
  }

    
}
export default App;
