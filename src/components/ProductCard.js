import React from 'react';
import './ProductCard.css';
import juguetesImg from '../assets/images/juguetes.jpeg';
import fondoImg from '../assets/images/fondo.webp';
import vasijaImg from '../assets/images/vasija.jpeg';

function ProductCard({ nombre, descripcion, imagen, onContactClick }) {
  return (
    <div className="product-card">
      {imagen && <img src={imagen} alt={nombre} className="product-image" />}
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <button
        className="contact-button"
        onClick={() => onContactClick(nombre)}
      >
        Contáctanos
      </button>
    </div>
  );
}

export default ProductCard;
