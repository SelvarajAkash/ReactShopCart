import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
  return (
    <section id="pagination" class="section-p1">
      <Link to="/">1</Link>
      <Link to="/">2</Link>
      <Link to="/">
        <i class="fa fa-arrow-right"></i>
      </Link>
    </section>
  );
}

export default Pagination;
