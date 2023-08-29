import React from "react";
import FP1 from "../assets/images/products/f1.jpg";
import FP2 from "../assets/images/products/f2.jpg";
import FP3 from "../assets/images/products/f3.jpg";
import { Link } from "react-router-dom";

function CardProduct() {
    const styles = {
        width : "70px",
    }
  return (
    <section id="cart" class="section-p1">
      <table width="100%">
        <thead>
          <tr>
            <td>Remove</td>
            <td>Image</td>
            <td>Product</td>
            <td>Prices</td>
            <td>Quatity</td>
            <td>Subtotal</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/">
                <i class="fa fa-times-circle"></i>
              </Link>
            </td>
            <td>
              <img src={FP1} alt="cart" style={{width: '70px'}} />
            </td>
            <td>Cartoon astronout T-Shirts</td>
            <td>$118.19</td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$118.19</td>
          </tr>
          <tr>
            <td>
              <Link to="/">
                <i class="fa fa-times-circle"></i>
              </Link>
            </td>
            <td>
              <img src={FP2} alt="cart" style={{width : '70px'}} />
            </td>
            <td>Cartoon astronout T-Shirts</td>
            <td>$118.19</td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$118.19</td>
          </tr>
          <tr>
            <td>
              <Link to="/">
                <i class="fa fa-times-circle"></i>
              </Link>
            </td>
            <td>
              <img src={FP3} alt="cart" style={{width : '70px'}} />
            </td>
            <td>Cartoon astronout T-Shirts</td>
            <td>$118.19</td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$118.19</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CardProduct;
