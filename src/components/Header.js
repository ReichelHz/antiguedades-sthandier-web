import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo1.png';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll suave y cierre del menú al hacer clic
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Abrir o cerrar menú"
            aria-expanded={menuOpen}
          >
            <div className={`hamburger ${menuOpen ? 'active' : ''}`}></div>
          </button>
          <img src={logo} alt="Logo Antigüedades Sthandier" className="logo" />
          <h1>
            <span className="antiguedades">Antigüedades</span>{" "}
            <span className="sthandier">Sthandier</span>
          </h1>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleScroll('banner')}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Inicio
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleScroll('productos')}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Productos
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleScroll('quienes-somos')}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Quiénes Somos
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleScroll('preguntas-frecuentes')}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Preguntas Frecuentes
              </button>
            </li>
            <li className="nav-item">
              <button
              className="nav-link"
              onClick={() => handleScroll('contacto')}
             style={{ background: 'none', border: 'none', cursor: 'pointer' }}
  >
           Contáctanos
          </button>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
