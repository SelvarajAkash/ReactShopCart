import React from "react";
import FN1 from '../assets/images/products/n1.jpg';
import FN2 from '../assets/images/products/n2.jpg';
import FN3 from '../assets/images/products/n3.jpg';
import FN4 from '../assets/images/products/n4.jpg';
import FN5 from '../assets/images/products/n5.jpg';
import FN6 from '../assets/images/products/n6.jpg';
import FN7 from '../assets/images/products/n7.jpg';
import FN8 from '../assets/images/products/n8.jpg';
import { Link } from "react-router-dom";

function ArrivalSection() {
  return (
    <section id="product1" className="section-p1">
      <h2>New Arrivals</h2>
      <p>Summer collect New Modern Design</p>
      <div className="pro-container">
        <div className="pro">
          <img src={FN1} alt="featuresProduct" />
          <div className="des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div className="star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <Link to="/">
            <i className="fa fa-shopping-cart cart"></i>
          </Link>
        </div>
        <div className="pro">
          <img src={FN2} alt="featuresProduct" />
          <div className="des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div className="star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <Link to="/">
            <i className="fa fa-shopping-cart cart"></i>
          </Link>
        </div>
        <div className="pro">
          <img src={FN3} alt="featuresProduct" />
          <div className="des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div className="star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <Link to="/">
            <i className="fa fa-shopping-cart cart"></i>
          </Link>
        </div>
        <div className="pro">
          <img src={FN4} alt="featuresProduct" />
          <div className="des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div className="star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <Link to="/">
            <i className="fa fa-shopping-cart cart"></i>
          </Link>
        </div>
        <div className="pro">
          <img src={FN5} alt="featuresProduct" />
          <div className="des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div className="star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <Link to="/">
            <i className="fa fa-shopping-cart cart"></i>
          </Link>
        </div>
        <div className="pro">
          <img src={FN6} alt="featuresProduct" />
          <div className="des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div className="star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <Link to="/">
            <i className="fa fa-shopping-cart cart"></i>
          </Link>
        </div>
        <div className="pro">
          <img src={FN7} alt="featuresProduct" />
          <div className="des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div className="star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <Link to="/">
            <i className="fa fa-shopping-cart cart"></i>
          </Link>
        </div>
        <div className="pro">
          <img src={FN8} alt="featuresProduct" />
          <div className="des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div className="star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <Link to="/">
            <i className="fa fa-shopping-cart cart"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ArrivalSection;
