//Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import ProductsListContainer from './pages/products/productsListConteiner';
import AboutUs from './pages/aboutUs/aboutUs';
import Contact from './pages/contact/contact';
import Footer from './components/footer/footer';

//Styles
import './index.css';

//Functions
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsListContainer />} />
          <Route path="/products/:id" element={<h2>Producto encontrado</h2>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
