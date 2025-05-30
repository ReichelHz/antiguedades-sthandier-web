import React, { useEffect, useState } from 'react';

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
        console.log('Respuesta API about:', data);
        console.log('Estructura completa:', JSON.stringify(data, null, 2));

        if (typeof data.data === 'string') {
          setAbout(data.data);
        } else {
          console.warn('No se encontró una descripción válida en la API.');
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
    <section
      id="quienes-somos"
      style={{
        backgroundColor: '#f5f5f5',
        padding: '60px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'justify',
        color: '#555',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Quiénes Somos</h2>
      <p>{error ? textoFijo : about || textoFijo}</p>
    </section>
  );
}

export default AboutUs;
