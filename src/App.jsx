import React from "react";
import Contact from "./pages/contact";
import About from "./pages/about";
import Homeopathy from "./pages/homeopathy";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/homeopathy" element={<Homeopathy />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
};

export default App;
