import React from 'react';
import bannerImage from '../assets/images/banner.jpeg';
import './Banner.css';

function Banner() {
  return (
    <div className="banner" id="banner">
      <img src={bannerImage} alt="Banner Antigüedades Sthandier" className="banner-image" />
      <div className="banner-overlay"></div>
      <div className="banner-text">
        <h2>
          Bienvenidos a Antigüedades <span className="highlight">Sthandier</span>
        </h2>
        <p>Descubre piezas únicas con historia y estilo</p>
        <svg className="arrow-down" viewBox="0 0 24 24">
          <path d="M12 16.5l-8-8 1.41-1.41L12 13.67l6.59-6.58L20 8.5z" />
        </svg>
      </div>
    </div>
  );
}

export default Banner;
