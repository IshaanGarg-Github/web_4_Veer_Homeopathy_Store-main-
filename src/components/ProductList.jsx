import React from "react";
import { useNavigate } from "react-router-dom";
import productData from "../productDetails.json";
import "./ProductList.css";

// Import all product images
import follibrace from "../assets/follibrace.jpg";
import sinoheal from "../assets/sinoheal.jpg";
import pilefix from "../assets/pilefix.jpg";
import dermoheal from "../assets/dermoheal.jpg";
import stressfree from "../assets/stressfree.jpg";
import wipestone from "../assets/wipestone.jpg";
import oviheal from "../assets/oviheal.jpg";
import tumoheal from "../assets/tumoheal.jpg";
import allerzee from "../assets/allerzee.jpg";
import fevoheal from "../assets/fevoheal.jpg";
import fungoheal from "../assets/fungoheal.jpg";
import reglow from "../assets/reglow.jpg";
import warteez from "../assets/warteez.jpg";
import justika from "../assets/justika.jpg";
import skiwell from "../assets/skiwell.jpg";
import kalmegh from "../assets/kalmegh.jpg";
import rheumoheal from "../assets/rheumoheal.jpg";
import acidoheal from "../assets/acidoheal.jpg";

// Create an image mapping object
const imageMap = {
  "follibrace.jpg": follibrace,
  "sinoheal.jpg": sinoheal,
  "pilefix.jpg": pilefix,
  "dermoheal.jpg": dermoheal,
  "stressfree.jpg": stressfree,
  "wipestone.jpg": wipestone,
  "oviheal.jpg": oviheal,
  "tumoheal.jpg": tumoheal,
  "allerzee.jpg": allerzee,
  "fevoheal.jpg": fevoheal,
  "fungoheal.jpg": fungoheal,
  "reglow.jpg": reglow,
  "warteez.jpg": warteez,
  "justika.jpg": justika,
  "skiwell.jpg": skiwell,
  "kalmegh.jpg": kalmegh,
  "rheumoheal.jpg": rheumoheal,
  "acidoheal.jpg": acidoheal,
};

const ProductList = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-list-container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {productData.map((product) => {
          const imageFilename = product.image.split("/").pop();
          const productImage = imageMap[imageFilename];

          return (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={productImage}
                alt={product.product}
                className="product-image"
              />
              <div className="product-info">
                <h2>{product.product}</h2>
                <p className="category">{product.category}</p>
                <div className="price-section">
                  {Array.isArray(product.available_size) ? (
                    product.available_size.map((size, index) => (
                      <p key={index} className="price-item">
                        <span className="size">{size.size}</span>
                        <span className="price">₹{size.price}</span>
                      </p>
                    ))
                  ) : (
                    <p className="price-item">
                      <span className="size">
                        {product.available_size.size}
                      </span>
                      <span className="price">
                        ₹{product.available_size.price}
                      </span>
                    </p>
                  )}
                </div>
                <p className="helps-in">Helps in: {product.helps_in}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
