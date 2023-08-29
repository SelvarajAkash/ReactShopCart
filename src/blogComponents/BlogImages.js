import React from "react";
import { Link } from "react-router-dom";
import B1 from '../assets/images/blog/b1.jpg';
import B2 from '../assets/images/blog/b2.jpg';
import B3 from '../assets/images/blog/b3.jpg';
import B4 from '../assets/images/blog/b4.jpg';
import B5 from '../assets/images/blog/b5.jpg';
import B6 from '../assets/images/blog/b6.jpg';

function BlogImages() {
  return (
    <section id="blog">
      <div class="blog-box">
        <div class="blog-img">
          <img src={B1} alt="blog" />
        </div>
        <div class="blog-details">
          <h4>The Catton-jersey Zip-Up Hoodie</h4>
          <p>
            Kickstarer man braid godard coloring book. Raclette waistcost
            selfies yr wolf chartreuse hexagon irony, godard
          </p>
          <Link to="/">CONTINUE READING</Link>
        </div>
      </div>
      <div class="blog-box">
        <div class="blog-img">
          <img src={B2} alt="blog" />
        </div>
        <div class="blog-details">
          <h4>The Catton-jersey Zip-Up Hoodie</h4>
          <p>
            Kickstarer man braid godard coloring book. Raclette waistcost
            selfies yr wolf chartreuse hexagon irony, godard
          </p>
          <Link to="/">CONTINUE READING</Link>
        </div>
      </div>
      <div class="blog-box">
        <div class="blog-img">
          <img src={B3} alt="blog" />
        </div>
        <div class="blog-details">
          <h4>The Catton-jersey Zip-Up Hoodie</h4>
          <p>
            Kickstarer man braid godard coloring book. Raclette waistcost
            selfies yr wolf chartreuse hexagon irony, godard
          </p>
          <Link to="/">CONTINUE READING</Link>
        </div>
      </div>
      <div class="blog-box">
        <div class="blog-img">
          <img src={B4} alt="blog" />
        </div>
        <div class="blog-details">
          <h4>The Catton-jersey Zip-Up Hoodie</h4>
          <p>
            Kickstarer man braid godard coloring book. Raclette waistcost
            selfies yr wolf chartreuse hexagon irony, godard
          </p>
          <Link to="/">CONTINUE READING</Link>
        </div>
      </div>
      <div class="blog-box">
        <div class="blog-img">
          <img src={B5} alt="blog" />
        </div>
        <div class="blog-details">
          <h4>The Catton-jersey Zip-Up Hoodie</h4>
          <p>
            Kickstarer man braid godard coloring book. Raclette waistcost
            selfies yr wolf chartreuse hexagon irony, godard
          </p>
          <Link to="/">CONTINUE READING</Link>
        </div>
      </div>
      <div class="blog-box">
        <div class="blog-img">
          <img src={B6} alt="blog" />
        </div>
        <div class="blog-details">
          <h4>The Catton-jersey Zip-Up Hoodie</h4>
          <p>
            Kickstarer man braid godard coloring book. Raclette waistcost
            selfies yr wolf chartreuse hexagon irony, godard
          </p>
          <Link to="/">CONTINUE READING</Link>
        </div>
      </div>
    </section>
  );
}

export default BlogImages;
