import React from "react";
import "../styles/Products.scss";

import horoscope1 from "../images/Tarot.jpg";
import horoscope2 from "../images/Stock-Market-Astrology.jpg";
import horoscope3 from "../images/Vedic-Muhurata.jpg";
import horoscope4 from "../images/Vedic-Yagya.jpg";

const Products = () => {
  return (
    <div class="container products py-3 my-5">
      <p className="services-heading text-center text-white pt-5">
        LATEST UPCOMING PRODUCTS
      </p>
      <div class="row">
        <div class="col-6 py-3">
          <div class="card">
            <img src={horoscope1} class="card-img-top" alt="..." />
            <div class="card-body text-dark text-center"><h5>product title</h5></div>
          </div>
        </div>
        <div class="col-6 py-3">
          <div class="card">
            <img src={horoscope2} class="card-img-top" alt="..." />
            <div class="card-body text-dark text-center"><h5>product title</h5></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 py-3">
          <div class="card">
            <img src={horoscope3} class="card-img-top" alt="..." />
            <div class="card-body text-dark text-center"><h5>product title</h5></div>
          </div>
        </div>
        <div class="col-6 py-3">
          <div class="card">
            <img src={horoscope4} class="card-img-top" alt="..." />
            <div class="card-body text-dark text-center"><h5>product title</h5></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
