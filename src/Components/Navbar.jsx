import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Styles/Navbar.css';
import '../Pages/Login';

function Navbar() {
  const buscar = () => {
    
    console.log('Buscar...');
  };

  return (
    <div className='home-container'>
      <div className='header'>
        <h1>Señor Limón</h1>
        <nav className='navbar'>
          <Link to="/AcercaNosotros">Acerca de Nosotros</Link>
          <a href="/services">Servicios</a>
          <a href='#products'>Productos</a>
          <Link to="/Contacto">Contacto</Link>
          <Link to="/Login">Administración</Link> {/* Aquí se agrega el enlace a la página de login */}
          <div className='search-container'>
            <input type='text' placeholder='Buscar...' /> 
            <button onClick={buscar}>Buscar</button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

