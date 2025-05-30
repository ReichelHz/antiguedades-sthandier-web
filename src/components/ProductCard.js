import React from 'react';
import './ProductCard.css'; // ajusta la ruta si es necesario

function ProductCard({ nombre, descripcion, imagen, onContactClick }) {
  return (
    <div className="product-card">
      {imagen && (
        <img
          src={imagen}
          alt={nombre}
          className="product-image"
        />
      )}
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
