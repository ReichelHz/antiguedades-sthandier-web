import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="overlay">
        <div className="container">
          <div className="left-column">
            <h3 className="title">
              <span className="title-black">Antigüedades </span>
              <span className="title-pink">Sthandier</span>
            </h3>
            <p className="description">
              Emprendimiento especializado en la venta de antigüedades vintage, ofreciendo manteles bordados, vajillas, candelabros, espejos, relojes, cristalería y otros artículos antiguos cuidadosamente seleccionados.
            </p>
          </div>

          <div className="right-column contact">
            <p><strong>Dirección:</strong> Avda Eucaliptus #1809, Laguna de Zapallar</p>

            <p className="social-icons">
              <strong>Redes Sociales:</strong>{' '}
              <a
                href="https://www.instagram.com/antiguedades.sthandier/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaInstagram className="icon" /> @antiguedades.sthandier
              </a>
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaWhatsapp className="icon" /> +56 9 1234 5678
              </a>
            </p>

            <p><strong>Reservas y pagos:</strong> Reservas por 24 horas y transferencias inmediatas.</p>
            <p><strong>Envíos:</strong> A través de Starken, días de despacho establecidos semanalmente.</p>
          </div>
        </div>
      </div>
      <small className="copyright">
        &copy; {new Date().getFullYear()} Antigüedades Sthandier. Todos los derechos reservados.
      </small>
    </footer>
  );
}
