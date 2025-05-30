import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductCarousel from './ProductCarousel';
import './ProductServices.css';

import accesoriosImg from '../assets/images/accesorios.jpg';
import mantelImg from '../assets/images/mantel.jpg';
import vasijaImg from '../assets/images/vasija.jpg';

function ProductsServices({ onSelectProduct }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productosSimulados = [
    {
      id: '1',
      nombre: 'Accesorios',
      descripcion: 'Variedad de accesorios vintage seleccionados cuidadosamente para complementar tu estilo.',
      imagen: accesoriosImg,
    },
    {
      id: '2',
      nombre: 'Manteles',
      descripcion: 'Manteles bordados hechos a mano con diseños tradicionales y únicos.',
      imagen: mantelImg,
    },
    {
      id: '3',
      nombre: 'Juegos de Vajillas',
      descripcion: 'Vajillas antiguas con valor histórico y decorativo, perfectas para tu hogar.',
      imagen: vasijaImg,
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/products-services/',
          {
            headers: {
              Authorization: 'Bearer ipss.get',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Error al cargar productos y servicios');
        }

        const data = await response.json();
        console.log('Respuesta API completa:', data);

        const innerData = data.data;
        console.log('Contenido de data.data:', innerData);

        let apiProducts = [];

        if (Array.isArray(innerData)) {
          apiProducts = innerData;
        } else if (typeof innerData === 'object' && innerData !== null) {
          // Buscar primer arreglo dentro de las propiedades de innerData
          const possibleArrays = Object.values(innerData).filter((val) => Array.isArray(val));
          if (possibleArrays.length > 0) {
            apiProducts = possibleArrays[0];
          }
        }

        console.log('Productos extraídos:', apiProducts);

        setProducts(apiProducts.length > 0 ? apiProducts : productosSimulados);
      } catch (err) {
        console.warn('Error API, mostrando productos simulados:', err.message);
        setError(err.message);
        setProducts(productosSimulados);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleContactClick = (nombreProducto) => {
    if (onSelectProduct) onSelectProduct(nombreProducto);
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) return <p>Cargando productos y servicios...</p>;

  return (
    <section id="productos" style={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2rem',
          color: '#333',
          borderBottom: '2px solid #ccc',
          paddingBottom: '10px',
          maxWidth: '400px',
          margin: '0 auto 30px auto',
        }}
      >
        Productos y Servicios
      </h2>

      {error && (
        <p style={{ textAlign: 'center', color: 'red', marginBottom: '20px' }}>
          {error} - Mostrando productos simulados
        </p>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            nombre={product.nombre}
            descripcion={product.descripcion}
            imagen={product.imagen}
            onContactClick={handleContactClick}
          />
        ))}
      </div>

      <div style={{ marginTop: '40px' }}>
        <ProductCarousel />
      </div>
    </section>
  );
}

export default ProductsServices;
