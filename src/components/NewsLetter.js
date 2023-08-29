import React from "react";

function NewsLetter() {
  return (
    <section id="newsletter" class="section-p1 section-m1">
      <div class="newstext">
        <h4>Sign up for newsletter</h4>
        <p>
          Get E-mail updates about our latest shop and
          <span> Special offer</span>
        </p>
      </div>
      <div class="form">
        <input type="text" placeholder="Enter your Email" />
        <button class="normal">Sign Up</button>
      </div>
    </section>
  );
}

export default NewsLetter;
