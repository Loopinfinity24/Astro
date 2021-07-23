import React from "react";
import "../styles/Products.scss";

import horoscope1 from "../images/bn1.jpg";
import horoscope2 from "../images/bn2.jpg";
import horoscope3 from "../images/bn3.jpg";
import horoscope4 from "../images/bn4.jpg";
import horoscope0 from "../images/Color Overlay (1).png";

const Products = () => {
  return (
    <div class="container products py-3 my-5">
      <p className="services-heading text-center text-white ">
        HOT PRODUCTS
      </p>
      <div class=" text-center arrow">
          <img src={horoscope0} class="img-fluid text-center" alt="..." />
        </div>
      <div class="row">
        <div class="col-6 py-3">
          <div class="card">
            <img src={horoscope1} class="card-img-top" alt="..." />
         
          </div>
        </div>
        <div class="col-6 py-3">
          <div class="card">
            <img src={horoscope2} class="card-img-top" alt="..." />
            
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 py-3">
          <div class="card">
            <img src={horoscope3} class="card-img-top" alt="..." />
           
          </div>
        </div>
        <div class="col-6 py-3">
          <div class="card">
            <img src={horoscope4} class="card-img-top" alt="..." />
          
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
