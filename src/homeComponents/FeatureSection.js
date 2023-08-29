import React from "react";
import F1 from "../assets/images/features/f1.png";
import F2 from "../assets/images/features/f2.png";
import F3 from "../assets/images/features/f3.png";
import F4 from "../assets/images/features/f4.png";
import F5 from "../assets/images/features/f5.png";
import F6 from "../assets/images/features/f6.png";

function FeatureSection() {
  return (
    <section id="feature" className="section-p1">
      <div className="fe-box">
        <img src={F1} alt="feature" />
        <h6>Free Shopping</h6>
      </div>
      <div className="fe-box">
        <img src={F2} alt="feature" />
        <h6>Online Order</h6>
      </div>
      <div className="fe-box">
        <img src={F3} alt="feature" />
        <h6>Save Money</h6>
      </div>
      <div className="fe-box">
        <img src={F4} alt="feature" />
        <h6>Promations</h6>
      </div>
      <div className="fe-box">
        <img src={F5} alt="feature" />
        <h6>Happy Sell</h6>
      </div>
      <div className="fe-box">
        <img src={F6} alt="feature" />
        <h6>F24/7 Support</h6>
      </div>
    </section>
  );
}

export default FeatureSection;
