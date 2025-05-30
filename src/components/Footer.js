import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <h3 style={styles.title}>Antigüedades Sthandier</h3>
          <p style={styles.description}>
            Emprendimiento especializado en la venta de antigüedades vintage, ofreciendo manteles bordados, vajillas, candelabros, espejos, relojes, cristalería y otros artículos antiguos cuidadosamente seleccionados.
          </p>

          <div style={styles.contact}>
            <p><strong>Dirección:</strong> Avda Eucaliptus #1809, Laguna de Zapallar</p>
            <p><strong>Instagram:</strong> <a href="https://www.instagram.com/antiguedades.sthandier/" target="_blank" rel="noopener noreferrer" style={styles.link}>@antiguedades.sthandier</a></p>
            <p><strong>Reservas y pagos:</strong> Reservas por 24 horas y transferencias inmediatas.</p>
            <p><strong>Envíos:</strong> A través de Starken, días de despacho establecidos semanalmente.</p>
          </div>

          <small style={styles.copyright}>
            &copy; {new Date().getFullYear()} Antigüedades Sthandier. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: '100%',
    backgroundColor: 'rgba(83, 86, 91, 0.6)', // fondo gris translúcido
    color: 'white',
    padding: '2rem 1rem 1rem',
    marginTop: '3rem',
    position: 'relative',
  },
  overlay: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
  },
  description: {
    marginBottom: '1.5rem',
    lineHeight: 1.5,
  },
  contact: {
    fontSize: '0.9rem',
    lineHeight: 1.4,
    marginBottom: '1.5rem',
  },
  link: {
    color: '#f4a9c0',
    textDecoration: 'underline',
  },
  copyright: {
    fontSize: '0.8rem',
    textAlign: 'center',
    marginTop: '1rem',
  },
};
