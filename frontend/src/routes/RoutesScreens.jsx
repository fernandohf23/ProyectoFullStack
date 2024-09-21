import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/RoutesScreens.css';

const RoutesScreens = () => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('authToken'); // Verifica si el usuario está autenticado

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    window.location.href = '/'; // Redirige a la página de inicio
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <img className='img-logoTienda' src="/img/LogoTiendaOnlineRemover.png" alt="Store Logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
          </li>
          <li>
            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Productos</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contacto</Link>
          </li>
          <li className="search-box">
            <input type="text" placeholder="Search..." />
          </li>
          <li className="cart-icon">
            <Link to="/cart">
              <img className='cart-logo' src="/img/cart.png" alt="cart" />
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Perfil</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-button">Cerrar Sesion</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Inicio Sesion</Link>
              </li>
              <li>
                <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>Registrarse</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default RoutesScreens;
