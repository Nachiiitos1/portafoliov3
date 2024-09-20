import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import icon1 from '../images/mepng.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import Mifoto from "../images/mifoto.png"

const Home = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  
  const windowRef = useRef(null);
  const contentRef = useRef(null); // Ref para window-content

  const sobreMiRef = useRef(null);
  const tecnologiasRef = useRef(null);
  const proyectosRef = useRef(null);
  const contactoRef = useRef(null);

  const icons = [
    { src: icon1, text: 'Sobre Mi', section: sobreMiRef },
    { src: icon2, text: 'Mis Tecnologías', section: tecnologiasRef },
    { src: icon3, text: 'Mis Proyectos', section: proyectosRef },
    { src: icon4, text: 'Icon 4', section: tecnologiasRef }, // Puedes cambiar esto según sea necesario
    { src: icon5, text: 'Contacto', section: contactoRef },
  ];

  // Función para desplazar a una sección específica
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current && contentRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Efecto para desplazar cuando se abre la ventana o cambia la sección activa
  useEffect(() => {
    if (isVisible && activeSection) {
      scrollToSection(activeSection);
    }
  }, [isVisible, activeSection]);

  // Función para alternar el estado maximizado
  const toggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  // Función para cerrar la ventana
  const closeWindow = () => {
    setIsVisible(false);
    setIsMaximized(false);
  };

  // Función para manejar el clic en un ícono
  const handleIconClick = (sectionRef) => {
    setActiveSection(sectionRef);
    setIsMaximized(false); // Abre en estado minimizado
    setIsVisible(true); // Muestra la ventana
  };

  return (
    <div className="home">
      <div className="icon-container">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="icon-item"
            onClick={() => handleIconClick(icon.section)}
          >
            <img src={icon.src} alt={`icon ${index + 1}`} className="icon" />
            <div className="icon-text">{icon.text}</div>
          </div>
        ))}
      </div>

      {/* Muestra la ventana solo si isVisible es true */}
      {isVisible && (
        <div
          className={`window-container ${isMaximized ? 'maximized' : 'minimized'}`}
          ref={windowRef}
        >
          <div className="window-header">
            <div className="window-title">Información</div>
            <div className="window-controls">
              <button onClick={toggleMaximize} aria-label="Maximizar/Minimizar">
                {isMaximized ? '🗗' : '🗖'}
              </button>
              <button onClick={closeWindow} aria-label="Cerrar">
                ✕
              </button>
            </div>
          </div>

          <div
            className={`window-content ${isMaximized ? 'maximized-content' : 'minimized-content'}`}
            ref={contentRef}
          >
            <div className="section sobre-mi" ref={sobreMiRef}>
              <div className="about-text">
                <h2>Sobre Mi</h2>
                <p>Hola, soy [Tu Nombre]. Soy un programador con experiencia en...</p>
              </div>
              <div className="profile-pic">
                <img src={Mifoto} alt="Mi foto" />
              </div>
            </div>

            <div className="section tecnologias" ref={tecnologiasRef}>
              <h2>Mis Tecnologías</h2>
              <p>Aquí están mis tecnologías...</p>
              {/* Agrega el contenido relacionado a las tecnologías */}
            </div>

            <div className="section proyectos" ref={proyectosRef}>
              <h2>Mis Proyectos</h2>
              <p>Aquí están mis proyectos...</p>
              {/* Agrega el contenido relacionado a los proyectos */}
            </div>

            <div className="section contacto" ref={contactoRef}>
              <h2>Contacto</h2>
              <p>Puedes contactarme en...</p>
              {/* Agrega información de contacto */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
