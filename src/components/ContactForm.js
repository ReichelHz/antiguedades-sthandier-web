import React, { useState, useEffect } from 'react';
import './ContactForm.css';

function ContactForm({ selectedProduct = '' }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    producto: '',
    mensaje: '',
    captcha: false 
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        producto: selectedProduct
      }));
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.captcha) {
      alert('Por favor confirma que no eres un robot');
      return;
    }

    console.log('Datos enviados:', formData);
    alert('Mensaje enviado correctamente');
    setFormData({
      nombre: '',
      email: '',
      producto: '',
      mensaje: '',
      captcha: false
    });
  };

  return (
    <div className="contact-form-container" id="contacto">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Producto:
          <select
            name="producto"
            value={formData.producto}
            onChange={handleChange}
            required
          >
            <option value="">-- Selecciona un producto --</option>
            <option value="Accesorios">Accesorios</option>
            <option value="Manteles">Manteles</option>
            <option value="Juegos de Vajillas">Juegos de Vajillas</option>
            <option value="Otros">Otros</option>
          </select>
        </label>

        <label>
          Mensaje:
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </label>

        <div className="captcha-container">
          <label htmlFor="captcha">No soy un Robot</label>
          <input
            type="checkbox"
            id="captcha"
            name="captcha"
            checked={formData.captcha}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
