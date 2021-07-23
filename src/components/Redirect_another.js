import React from "react";

import "../styles/Horoscope.scss";

import horoscope0 from "../images/Color Overlay (1).png";
import horoscope1 from "../images/bn1.jpg";
import horoscope2 from "../images/bn2.jpg";
import horoscope3 from "../images/gemini2.png";
import horoscope4 from "../images/cancer2.png";
import horoscope5 from "../images/leo2.png";
import horoscope6 from "../images/virgo2.png";
import horoscope7 from "../images/libra2.png";
import horoscope8 from "../images/scorpio2.png";
import horoscope9 from "../images/sagittarus2.png";
import horoscope10 from "../images/capricorn2.png";
import horoscope11 from "../images/aquarius2.png";
import horoscope12 from "../images/pisces2.png";

function Redirect_another() {
  return (
    <div className="container  horoscope py-3" style={{marginTop:'3%'}}>
    
    <div class="row">
        <div class="col-6 py-3">
          <div class="card">
          <a href="#">
            <img src={horoscope1} class="card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div class="col-6 py-3">
          <div class="card">
            <a href="#">
            <img src={horoscope2} class="card-img-top" alt="..." />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Redirect_another;
