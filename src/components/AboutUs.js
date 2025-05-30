import React, { useEffect, useState } from 'react';

function AboutUs() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const textoFijo = `En Antigüedades Sthandier nos especializamos en ofrecer piezas únicas con valor histórico, decorativo y emocional. 
Desde 1985, hemos cultivado una profunda pasión por la historia y los objetos que la representan. Nuestra misión es rescatar, conservar y dar nueva vida a artículos antiguos, 
permitiendo que formen parte de nuevos hogares y nuevas historias.`;

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
        if (
          data &&
          data.data &&
          data.data.data &&
          typeof data.data.data.description === 'string'
        ) {
          setAbout(data.data.data.description);
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
