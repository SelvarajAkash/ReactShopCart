import React from "react";
import { Link } from "react-router-dom";
import Video from '../assets/images/about/1.mp4';

function AboutVideo() {
  return (
    <section id="about-app" class="section-p1">
      <h2>
        Download Our <Link to="/">App</Link>
      </h2>
      <div class="video">
        <video autoplay muted loop src={Video}></video>
      </div>
    </section>
  );
}

export default AboutVideo;
