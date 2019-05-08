import React, { Component } from 'react';


export default class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <header className="navbar">
          <div className="logo-container">
            <h1>W<span>O</span>L<span>O</span>X</h1>
          </div>
          <ul className="menu-container">
            <li className="menu-item"><a href="">Inicio</a></li>
            <li className="menu-item"><a href="">Tecnologías</a></li>
            <li className="menu-item"><a href="">Beneficios</a></li>
            <li className="menu-item"><a href="">Requerimientos</a></li>
            <li className="menu-item"><a href="">Productos</a></li>
          </ul>
          <button className="login-button" type="button">
            Login
          </button>  
        </header>
        <div className="hero">
          <p className="hero__welcome-text">
            Bienvenido a tu entrevista técnica en Wolox
          </p>
          <img src="./img/hero.jpg" alt="hero image" className="hero__welcome-image"/>
        </div>
        <div className="technologies">
          <div className="technologies-cloud">
            <p className="technologies-cloud__text">
              Estamos buscando para incorporar gente increíble para estas tecnologías:
            </p>          
            <img src="./img/technologies" alt="Programing languajes" className="technologies-cloud__img"/>
          </div>
          <div className="technologies-social">
            <img src="./img/technologies" alt="Social banner" className="technologies-social__img"/>
            <p className="technologies-social__text">
              Estamos buscando para incorporar gente increíble para estas tecnologías:
            </p>          
          </div>
        </div>
        <div className="benefits">
          <ul className="benefits-list">
            <li className="benefits-item">
              <img src="/img/benefits1.png" alt="flexibility" className="benefits-item__img"/>
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
                o recibidos de carreras del rubro informático,
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
            completar el ejercicio
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