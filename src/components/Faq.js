import React, { useEffect, useState } from 'react';

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/faq/', {
          headers: {
            'Authorization': 'Bearer ipss.get'
          }
        });

        if (!response.ok) {
          throw new Error('Error al cargar las preguntas frecuentes');
        }

        const data = await response.json();
        const faqsArray = Array.isArray(data.data) ? data.data : [];
        setFaqs(faqsArray);
      } catch (err) {
        console.error('Error al obtener FAQs:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) return <p>Cargando preguntas frecuentes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="preguntas-frecuentes" className="faq" style={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '2rem',
        color: '#333',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        maxWidth: '400px',
        margin: '0 auto 30px auto'
      }}>
        Preguntas Frecuentes
      </h2>

      <ul style={{ maxWidth: '800px', margin: '0 auto', listStyle: 'none', padding: 0 }}>
        {faqs.map(faq => (
          <li key={faq.id} style={{
            marginBottom: '20px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <strong style={{ display: 'block', marginBottom: '10px', color: '#333' }}>{faq.titulo}</strong>
            <p style={{ margin: 0, color: '#555' }}>{faq.respuesta}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Faq;
