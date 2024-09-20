import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Importa los estilos

const Navbar = () => {
  // Estado para la hora actual
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Actualiza la hora cada segundo
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="navbar">
      <div className="start-button-container">
        <button className="start-button"></button>
      </div>
      <div className="clock-container">
        <div className="clock">{time}</div>
      </div>
    </div>
  );
};

export default Navbar;
