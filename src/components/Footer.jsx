import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Dedicated to providing natural healing solutions through homeopathy,
            helping you achieve optimal wellness.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="product.html">Products</a>
            </li>
            <li>
              <a href="homeopathy.html">About Homeopathy</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-phone"></i> +91 904 508 8689
          </p>
          <p>
            <i className="fas fa-envelope"></i> veerhomeopathic@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Opp. Durga Mandir, Samrat
            Vikram Colony, Chilkana Road, Saharanpur
          </p>
        </div>
        <div className="footer-section">
          <h3>Developer Info</h3>
          <p>
            Developed by Ishaan Garg. Contact for professional web development
            services.
          </p>
          <p>Contact:</p>
          <div className="social-links">
            <a href="https://github.com/IshaanGarg-Github">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ishaan-garg1/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/ishaan__garg22">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:ishaangarg2289@gmail.com" title="Send me an email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Veer Homeopathic Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
