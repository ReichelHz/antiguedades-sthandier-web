import React, { useEffect, useState } from 'react';
import './AboutUs.css'; // Importa los estilos

function AboutUs() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const textoFijo = `En Antigüedades Sthandier nos especializamos en ofrecer piezas únicas con valor histórico, 
Desde 1985.`;

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/about-us/', {
      headers: {
        'Authorization': 'Bearer ipss.get'
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar quiénes somos');
        return res.json();
      })
      .then(data => {
        if (typeof data.data === 'string') {
          setAbout(data.data);
        } else {
          setAbout(null);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando información de Quiénes Somos...</p>;

  return (
    <div style={{ backgroundColor: 'rgba(106, 110, 115, 0.15)', padding: '60px 0' }}>
      <section id="quienes-somos" className="about-us-section">
        <h2 className="about-us-title">Quiénes Somos</h2>
        <p>{error ? textoFijo : about || textoFijo}</p>
      </section>
    </div>
  );
}

export default AboutUs;
