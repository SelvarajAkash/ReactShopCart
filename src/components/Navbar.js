import React from "react";
import Logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <section id="header">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div>
        <ul id="navbar">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li id="lg-bag">
            <Link to="/cart">
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </li>
          <Link to="/" id="close">
            <i className="fa fa-times"></i>
          </Link>
        </ul>
      </div>
      <div id="mobile">
        <a href="cart.html">
          <i className="fa fa-shopping-cart"></i>
        </a>
        <i id="bar" className="fa fa-outdent"></i>
      </div>
    </section>
  );
}

export default Navbar;
