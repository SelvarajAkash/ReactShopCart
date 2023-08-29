import React from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    console.log("welcome !");
  };

  return (
    <section id="form-details" className="section-p1">
      <form>
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear you</h2>
        <input type="text" placeholder="Type Your Name" />
        <input type="text" placeholder="Type Your E-mail" />
        <input type="text" placeholder="Type Your Subject" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Type your Message"
        ></textarea>
        <button className="normal" onClick={() => handleClick()}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
