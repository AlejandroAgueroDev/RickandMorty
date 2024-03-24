import React from "react";
import '../styles/About.css'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
  return (
    <div className="myAbout">
      <h2 className="title-about">RICK AND MORTY PROYECTO INTEGRADOR</h2>
      <p className="p-about">
        ¡Hola! Soy Alejandro Agüero, estudiante de FullStack en Henry. Mi pasión
        por la programación me llevó a explorar el fascinante universo de la
        serie "Rick y Morty", donde apliqué mis habilidades en un proyecto
        único. En constante aprendizaje, busco enfrentar nuevos desafíos y
        contribuir al mundo del desarrollo web. Acompáñame en este emocionante
        viaje donde transformo ideas en código.
      </p>
      <div className="social-buttons">
        <a href="https://www.instagram.com/alejandro_.aguero/" target="_blank" rel="noopener noreferrer" className="button instagram-button">
        <FontAwesomeIcon icon={faInstagram} className="icon" /> Instagram
        </a>
        <a href="https://github.com/AlejandroAgueroDev" target="_blank" rel="noopener noreferrer" className="button github-button">
        <FontAwesomeIcon icon={faGithub} className="icon" /> GitHub
        </a>
      </div>
    </div>
    
  );
}

export default About;
