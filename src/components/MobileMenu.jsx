import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="mobile-menu-container">
      <button
        className={`mobile-menu-btn ${isMenuOpen ? "open" : ""}`}
        aria-expanded={isMenuOpen}
        aria-label="Toggle menu"
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      {isMenuOpen && (
        <>
          {/* Overlay for clicking outside */}
          <div
            className="menu-overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />

          <nav
            id="mobile-navigation"
            className="nav-links"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              top: "80px",
              left: 0,
              width: "100%",
              background: "white",
              padding: "2rem",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              zIndex: 1000,
            }}
          >
            <Link
              to="/"
              className="nav-link"
              onClick={closeMenu}
              aria-current="page"
            >
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/product" className="nav-link" onClick={closeMenu}>
              Product Range
            </Link>
            <Link to="/homeopathy" className="nav-link" onClick={closeMenu}>
              About Homeopathy
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact Us
            </Link>
          </nav>
        </>
      )}
    </div>
  );
}
