import React from "react";
import FP1 from '../assets/images/products/f1.jpg';
import FP2 from '../assets/images/products/f2.jpg';
import FP3 from '../assets/images/products/f3.jpg';
import FP4 from '../assets/images/products/f4.jpg';
import FP5 from '../assets/images/products/f5.jpg';
import FP6 from '../assets/images/products/f6.jpg';
import FP7 from '../assets/images/products/f7.jpg';
import FP8 from '../assets/images/products/f8.jpg';
import { Link } from "react-router-dom";

function FeatureProductSection() {
  return (
    <section id="product1" className="section-p1">
      <h2>Features Products</h2>
      <p>Summer collect New Modern Design</p>
      <div className="pro-container">
        <div className="pro">
          <img src={FP1} alt="featuresProduct" />
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
          <img src={FP2} alt="featuresProduct" />
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
          <img src={FP3} alt="featuresProduct" />
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
          <img src={FP4} alt="featuresProduct" />
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
          <img src={FP5} alt="featuresProduct" />
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
          <img src={FP6} alt="featuresProduct" />
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
          <img src={FP7} alt="featuresProduct" />
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
          <img src={FP8} alt="featuresProduct" />
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

export default FeatureProductSection;
