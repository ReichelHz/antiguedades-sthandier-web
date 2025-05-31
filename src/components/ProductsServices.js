import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductCarousel from './ProductCarousel';
import juguetesImg from '../assets/images/juguetes.jpeg';
import fondoImg from '../assets/images/fondo.webp';
import vasijaImg from '../assets/images/vasija.jpeg';
import img6 from '../assets/images/img6.jpeg';  // Cambié de img1 a img6
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.jpeg';
import img5 from '../assets/images/img5.jpeg';

function ProductsServices({ onSelectProduct, onProductsLoaded }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        const innerData = data.data;

        let apiProducts = [];

        if (Array.isArray(innerData)) {
          apiProducts = innerData;
        } else if (typeof innerData === 'object' && innerData !== null) {
          const possibleArrays = Object.values(innerData).filter((val) => Array.isArray(val));
          if (possibleArrays.length > 0) {
            apiProducts = possibleArrays[0];
          }
        }

        // Agregamos imágenes representativas según nombre
        const productsWithImages = apiProducts.map((p) => {
          let imagen = p.imagen; // Usamos la de la API si viene

          // Solo sobrescribir si imagen está vacía
          if (!imagen) {
            const nombre = p.nombre.toLowerCase();
            if (nombre.includes('figura')) {
              imagen = juguetesImg;
            } else if (nombre.includes('loza')) {
              imagen = fondoImg;
            } else if (nombre.includes('vajilla')) {
              imagen = vasijaImg;
            }
          }

          return { ...p, imagen };
        });

        setProducts(productsWithImages);
        if (onProductsLoaded) onProductsLoaded(productsWithImages);
      } catch (err) {
        console.warn('Error al obtener productos desde la API:', err.message);
        setError(err.message);
        setProducts([]);
        if (onProductsLoaded) onProductsLoaded([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [onProductsLoaded]);

  const handleContactClick = (nombreProducto) => {
    if (onSelectProduct) onSelectProduct(nombreProducto);
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) return <p style={{ textAlign: 'center' }}>Cargando productos y servicios...</p>;

  const extraImages = [
    { id: 'extra1', nombre: 'Extra 1', imagen: img6 },  // Aquí uso img6
    { id: 'extra2', nombre: 'Extra 2', imagen: img2 },
    { id: 'extra3', nombre: 'Extra 3', imagen: img3 },
    { id: 'extra4', nombre: 'Extra 4', imagen: img4 },
    { id: 'extra5', nombre: 'Extra 5', imagen: img5 },
  ];

  return (
    <section id="productos" style={{ padding: '40px 20px', backgroundColor: '#FAF9F6' }}>
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
          {error} - Intenta recargar la página
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
        <ProductCarousel products={[...products, ...extraImages]} />
      </div>
    </section>
  );
}

export default ProductsServices;
