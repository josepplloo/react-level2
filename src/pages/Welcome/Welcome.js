import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import imagesLoader from './img/images';

const {home, techs, benefits, requirements} = '#';

export default class Welcome extends Component {

  /**
   * Return the info for render the image.
   * @param {String} id 
   */
  getImageByID(id) {
    let imageInfo = [];
    imagesLoader().forEach(image => {      
      if(image.id === id){
        imageInfo = [image.src, image.alt]
      }
    });
    return imageInfo;
  }
  
  render() {
    const hero = this.getImageByID('hero');
    const technologies = this.getImageByID('technologies');
    const social = this.getImageByID('social');
    const clock = this.getImageByID('clock');  
    const desk = this.getImageByID('desk');
    const workshop = this.getImageByID('workshop');
    const snacks = this.getImageByID('snacks');
    const wfh = this.getImageByID('wfh');
    const brain = this.getImageByID('brain');

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
            <li className="menu-item"><Link to="/productos">Productos</Link></li>
          </ul>
          
          <Link to="/login">
          <button className="login-button" type="button">
            Login
          </button>
          </Link>
        </header>
        <div className="hero">
          <p className="hero__welcome-text">
            Bienvenido a tu <span>Entrevista técnica</span> en <span>Wolox</span>
          </p>
          <img src={hero[0]} alt={hero[1]} className="hero__welcome-image"/>
        </div>
        <div className="technologies">
          <div className="technologies-cloud">
            <p className="technologies-cloud__text">
              Estamos buscando<br/> para incorporar gente<br/> increíble para estas<br/> tecnologías:
            </p>          
            <img src={technologies[0]} alt={technologies[1]} className="technologies-cloud__img"/>
          </div>
          <div className="technologies-social">
            <img src={social[0]} alt={social[1]} className="technologies-social__img"/>
            <p className="technologies-social__text">
              Trabajamos para<br/> <span>convertir</span> <span>ideas</span> en<br/> productos.
            </p>          
          </div>
        </div>
        <div className="benefits">
          <p className="benefits__title">Entre los beneficios que ofrecemos se encuentran <span>;)</span></p>
          <ul className="benefits-list">
            <li className="benefits-item">
              <img src={clock[0]} alt={clock[1]} className="benefits-item__img"/>
              <p className="benefits-item__text">Flexibilidad Horaria</p>
            </li>
            <li className="benefits-item">
              <img src={desk[0]} alt={desk[1]} className="benefits-item__img"/>
              <p className="benefits-item__text">Work Office</p>
            </li>
            <li className="benefits-item">
              <img src={workshop[0]} alt={workshop[1]} className="benefits-item__img"/>
              <p className="benefits-item__text">Capacitaciones y Workshops</p>
            </li>
            <li className="benefits-item">
              <img src={snacks[0]} alt={snacks[0]} className="benefits-item__img"/>
              <p className="benefits-item__text">Snaks, frutas y bebidas gratis</p>
            </li>
            <li className="benefits-item">
              <img src={wfh[0]} alt={wfh[1]} className="benefits-item__img"/>
              <p className="benefits-item__text">Semana Remota</p>
            </li>
            <li className="benefits-item">
              <img src={brain[0]} alt={brain[1]} className="benefits-item__img"/>
              <p className="benefits-item__text">Trabajar en últimas tecnologías</p>
            </li>
          </ul>
        </div>  
        <div id="requirements" className="requirements">
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