import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductsServices from './components/ProductsServices';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Faq from './components/Faq';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <div>
      <Header />
      <Banner />
      <main>
        <ProductsServices onSelectProduct={setSelectedProduct} />
        <AboutUs />
        <Faq />
        <ContactForm selectedProduct={selectedProduct} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
