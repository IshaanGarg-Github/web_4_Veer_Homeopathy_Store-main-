import React from "react";
import ProductList from "../components/ProductList.jsx";
import "./product.css";

const Product = () => {
  return (
    <div>
      <div className="product-hero">
        <h1>Products</h1>
        <p>Premium products crafted for performance and value.</p>
      </div>
      <ProductList />
    </div>
  );
};

export default Product;
