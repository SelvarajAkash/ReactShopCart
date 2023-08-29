import React from "react";

function ContactDetails() {
  return (
    <section id="contact-details" className="section-p1">
      <div className="details">
        <span>GET IN TOUCH</span>
        <h2>Visit one our agency location or contact us todays</h2>
        <h3>Head Office</h3>
        <div>
          <li>
            <i className="fa fa-location-arrow"></i>
            <p>58 Cuddalore Main Road, Pakkam</p>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <p>selvaraj1662003@gmail.com</p>
          </li>
          <li>
            <i className="fa fa-phone"></i>
            <p>+91 7200524286</p>
          </li>
          <li>
            <i className="fa fa-clock-o"></i>
            <p>Monday to Saturday : 9.00am to 16.00pm</p>
          </li>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.6545842238047!2d79.68352697293936!3d11.859434338289109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54a0f2da108eb5%3A0xf9f3433470a20c8f!2s58%2C%20Cuddalore%20Main%20Rd%2C%20Pakkam%2C%20Tamil%20Nadu%20605106!5e0!3m2!1sen!2sin!4v1686231163881!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactDetails;
