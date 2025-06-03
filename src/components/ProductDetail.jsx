import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productData from "../productDetails.json";
import "./ProductDetail.css";

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

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail-container">
        <h2>Product not found</h2>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  // Get the image filename from the path
  const imageFilename = product.image.split("/").pop();
  const productImage = imageMap[imageFilename];

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={() => navigate("/products")}>
        ← Back to Products
      </button>

      <div className="product-detail-card">
        <div className="product-header">
          <img
            src={productImage}
            alt={product.product}
            className="product-detail-image"
          />
          <h1>{product.product}</h1>
        </div>
        <div className="product-info">
          <div className="info-section">
            <h3>Category</h3>
            <p>{product.category}</p>
          </div>

          <div className="info-section">
            <h3>Helps In</h3>
            <p>{product.helps_in}</p>
          </div>

          <div className="info-section">
            <h3>Indications</h3>
            <p>{product.indication}</p>
          </div>

          <div className="info-section">
            <h3>Composition</h3>
            <p>{product.composition}</p>
          </div>

          <div className="info-section">
            <h3>Available Sizes & Prices</h3>
            {Array.isArray(product.available_size) ? (
              product.available_size.map((size, index) => (
                <p key={index}>
                  {size.size}: ₹{size.price}
                </p>
              ))
            ) : (
              <p>
                {product.available_size.size}: ₹{product.available_size.price}
              </p>
            )}
          </div>
        </div>
      </div>

      <section className="product-contact-section">
        <div className="contact-container">
          <h2>Interested in this Product?</h2>
          <p>Fill out the form below to inquire about {product.product}</p>
          <form action="https://formspree.io/f/myzebybd" method="POST">
            <input type="hidden" name="product" value={product.product} />
            <input type="hidden" name="product_id" value={product.id} />

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="quantity">Quantity Required</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              required
            />

            <label htmlFor="message">Additional Message (Optional)</label>
            <textarea id="message" name="message" rows="4"></textarea>

            <button type="submit">Send Inquiry</button>
          </form>

          <div className="contact-info">
            <p>Email: veerhomeopathic@gmail.com</p>
            <p>Phone: +91 904 508 8689</p>
            <p>
              Note: After submitting the form, you'll receive a confirmation
              message on the screen. Your inquiry will be sent directly to our
              email, and we'll get back to you as soon as possible. <br />
              We respect your privacy — your contact details are safe with us
              and will only be used to respond to your inquiry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
