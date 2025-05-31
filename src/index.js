import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // ✅ Importa BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>        {/* ✅ Envuelve tu App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
