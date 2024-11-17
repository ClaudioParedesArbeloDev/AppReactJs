//Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import ProductsListContainer from './pages/products/productListContainer/productsListConteiner';
import AboutUs from './pages/aboutUs/aboutUs';
import Contact from './pages/contact/contact';
import ProductDetail from './pages/products/productDetail/productDetail';
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
          <Route path="/products/:id" element={ <ProductDetail /> } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
