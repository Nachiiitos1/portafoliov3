import React from 'react';
import Home from './Components/assets/Home'; // Importa el componente Home
import Navbar from './Components/assets/Navbar'; // Importa el componente Navbar
import './App.css'; // Mantén la importación de los estilos si es necesario

function App() {
  return (
    <div className="App">
      <Home /> {/* Renderiza el componente Home */}
      <Navbar /> {/* Renderiza el componente Navbar s*/}
    </div>
  );
}

export default App;
