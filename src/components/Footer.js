import React from 'react'
import Logo from '../assets/images/logo.png';
import App from '../assets/images/pay/app.jpg';
import Play from '../assets/images/pay/play.jpg';
import Pay from '../assets/images/pay/pay.png';

function Footer() {
  return (
    <footer className="section-p1">
        <div className="col">
            <img src={Logo}  className="logo" alt="flogo" />
            <h4>Contact</h4>
            <p><strong>Address : </strong> 58 cuddalore Main Road, Pakkam.</p>
            <p><strong>Phone :</strong> +91 7200425286</p>
            <div className="follow">
                <h4>Follows</h4>
                <div className="icon">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-pinterest"></i>
                    <i className="fa fa-youtube"></i>
                </div>
            </div>
        </div>
        <div className="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help Center</a>
        </div>
        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or google Play</p>
            <div className="row">
                <img src={App} alt="app" />
                <img src={Play} alt="play" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src={Pay} alt="pay" />
        </div>
        <div className="copyright">
            <p>&#169; 2023 , SR WebTech - ReactJs ShopCart Template</p>
        </div>
    </footer>


  )
}

export default Footer;