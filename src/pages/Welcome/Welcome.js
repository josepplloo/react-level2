import React, { Component } from 'react';

import hero from './img/hero.png';
import technologies from './img/technologies.png';
import social from './img/social.png';

import imagesLoader from './img/images';

const {home, techs, benefits, requirements, Products} = '#';

export default class Welcome extends Component {

  /**
   * Return the info for render the image.
   * @param {String} id 
   */
  getImageByID(id) {
    const image = ['',''];
    imagesLoader().forEach(image => {
      if(image.id === id){
        return [image.src, image.alt]
      }
    });
    return image;
  }
  
  render() {
    const clock = this.getImageByID('clock');
    console.log(clock);
    
    return (
      <div className="Welcome">
        <header className="navbar">
          <div className="logo-container">
            <h1>W<span>O</span>L<span>O</span>X</h1>
          </div>
          <ul className="menu-container">
            <li className="menu-item"><a href={home}>Inicio</a></li>
            <li className="menu-item"><a href={techs}>Tecnologías</a></li>
            <li className="menu-item"><a href={benefits}>Beneficios</a></li>
            <li className="menu-item"><a href={requirements}>Requerimientos</a></li>
            <li className="menu-item"><a href={Products}>Productos</a></li>
          </ul>
          <button className="login-button" type="button">
            Login
          </button>
        </header>
        <div className="hero">
          <p className="hero__welcome-text">
            Bienvenido a tu <span>Entrevista técnica</span> en <span>Wolox</span>
          </p>
          <img src={hero} alt="People and a computer" className="hero__welcome-image"/>
        </div>
        <div className="technologies">
          <div className="technologies-cloud">
            <p className="technologies-cloud__text">
              Estamos buscando<br/> para incorporar gente<br/> increíble para estas<br/> tecnologías:
            </p>          
            <img src={technologies} alt="Programing languajes" className="technologies-cloud__img"/>
          </div>
          <div className="technologies-social">
            <img src={social} alt="Social banner" className="technologies-social__img"/>
            <p className="technologies-social__text">
              Trabajamos para<br/> <span>convertir</span> <span>ideas</span> en<br/> productos.
            </p>          
          </div>
        </div>
        <div className="benefits">
          <p>Entre los beneficios que ofrecemos se encuentran <span>;)</span></p>
          <ul className="benefits-list">
            <li className="benefits-item">
              <img src={clock[0]} alt={clock[1]} className="benefits-item__img"/>
              <p>Flexibilidad Horaria</p>
            </li>
            <li className="benefits-item">
              <img src="/img/benefits2.png" alt="Home Office" className="benefits-item__img"/>
              <p>Work Office</p>
            </li>
            <li className="benefits-item">
              <img src="/img/benefits3.png" alt="Workshops" className="benefits-item__img"/>
              <p>Capacitaciones y Workshops</p>
            </li>
            <li className="benefits-item">
              <img src="/img/benefits4.png" alt="Snaks" className="benefits-item__img"/>
              <p>Snaks, frutas y bebidas gratis</p>
            </li>
            <li className="benefits-item">
              <img src="/img/benefits5.png" alt="Work From Home" className="benefits-item__img"/>
              <p>Semana Remota</p>
            </li>
            <li className="benefits-item">
              <img src="/img/benefits6.png" alt="cut edge" className="benefits-item__img"/>
              <p>Trabajar en últimas tecnologías</p>
            </li>
          </ul>
        </div>  
        <div className="requirements">
          <h2 className="requirements-title">Requerimientos</h2>
          <ul className="requirements-list">
            <li className="requirements-items">
              <p className="requirements-item__text">
                Estudiantes avanzados 
                o recibidos de carreras del rubro<br/> informático,
                sistemas o eléctronicos
              </p>
            </li>
            <li className="requirements-items">
              <p className="requirements-item__text">
                Inglés intermedio/avanzado 
              </p>
            </li>
            <li className="requirements-items">
              <p className="requirements-item__text">
                Conocimientos en metodologías 
                ágiles (deseable)
              </p>
            </li>
          </ul>
        </div>
        <footer className="footer">
          <h1 className="footer-title">Gracias por 
            <span> completar el ejercicio</span>
          </h1>
          <h2 className="footer-subtitle">
            Te invitamos a ver mas información
          </h2>
          <button className="footer-button" type="button">
            Conocer más
          </button>
          <h5 className="footer__wolox-logo">WOLOX</h5>
        </footer>
      </div>
    );
  }
}