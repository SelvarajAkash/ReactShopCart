import React from 'react'
import About from '../assets/images/about/a6.jpg';

function AboutImages() {
  return (
    <section id="about-head" class="section-p1">
    <img src={About} alt="about" />
    <div>
        <h2>Who We Are ?</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, impedit. 
           Nisi placeat similique unde maiores tenetur, molestiae a animi consectetur
           nariatur eum iusto dolorum voluptas alias consequuntur provident 
           cum ea facilis voluptatem veniam eveniet? Culpa harum praesentium quos 
           facere assumenda!
        </p>

        <abbr title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Corporis, about-header.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </abbr><br /><br />
        <marquee bgcolor="#ccc" loop="-1" scrollamount="5" direction="left" width="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio, possimus commodi accusamus eos qui ipsa?
        </marquee>
    </div>
    </section>
  )
}

export default AboutImages;