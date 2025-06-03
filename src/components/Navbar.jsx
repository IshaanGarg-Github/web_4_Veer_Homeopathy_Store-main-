import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-pic.jpg";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav>
      <div className="navImgHead">
        <img id="logo-pic" src={logo} alt="Logo" />
        <h1>Veer Homeopathy Store</h1>
      </div>

      <div className="nav-links">
        <div className="nav-home">
          <Link to="/">Home</Link>
        </div>

        <div className="nav-about">
          <Link to="/about">About Us</Link>
        </div>

        <div className="nav-product">
          <Link to="/product">Product Range</Link>
        </div>

        <div className="nav-homeopathy">
          <Link to="/homeopathy">About Homeopathy</Link>
        </div>

        <div className="nav-contact">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
