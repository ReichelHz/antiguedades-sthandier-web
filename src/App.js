import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductsServices from './components/ProductsServices';
import AboutUs from './components/AboutUs';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productsList, setProductsList] = useState([]);

  // Actualiza producto seleccionado desde tarjetas
  const handleSelectedProduct = (productName) => {
    setSelectedProduct(productName);
  };

  // Recibe lista de productos cargados en ProductsServices
  const handleProductsLoaded = (products) => {
    setProductsList(products);
  };

  return (
    <>
      <Header />
      <Banner />
      <div className="App">
        <ProductsServices 
          onSelectProduct={handleSelectedProduct} 
          onProductsLoaded={handleProductsLoaded} 
        />
        <AboutUs />
        <Faq />
        <ContactForm 
          selectedProduct={selectedProduct} 
          products={productsList} 
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
