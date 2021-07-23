import React from "react";

import "../styles/Horoscope.scss";

import horoscope0 from "../images/Color Overlay (1).png";
import horoscope1 from "../images/aries2.png";
import horoscope2 from "../images/taurus2.png";
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

function Horoscope() {
  return (
    <div className="container  horoscope py-3">
      <div>
        <p className="services-heading text-center text-white ">HOROSCOPES</p>
        <div class=" text-center arrow">
          <img src={horoscope0} class="img-fluid text-center" alt="..." />
        </div>
        <p className=" text-center">
          Today, what does your zodiac sign recommends? Find out! you can also
          look into weekly, monthly or yearly detail predictions. Our expert’s
          prediction <br />
          will help you to plan for near future & future.
        </p>
      </div>
      <div className="container ">
        <div class="row ms-5 ">
          <div class="col">
          <a  href="/sunsign/Aries">
            <img
              src={horoscope1}
              class="img-fluid items rounded-circle"
              alt="..."
            />
            </a>
          </div>
          <div class="col">
          <a  href="/sunsign/Taurus">
            <img
              src={horoscope2}
              class="img-fluid items rounded-circle"
              alt="..."
            />
            </a>
          </div>

          <div class="col">
          <a  href="/sunsign/Gemini">
            <img
              src={horoscope3}
              class="img-fluid items rounded-circle"
              alt="..."
            />
            </a>
          </div>
          <div class="col">
          <a  href="/sunsign/Cancer">
            <img
              src={horoscope4}
              class="img-fluid items rounded-circle"
              alt="..."
            />
            </a>
          </div>
          <div class="col">
          <a  href="/sunsign/Leo">
            <img
              src={horoscope5}
              class="img-fluid items rounded-circle"
              alt="..."
            />
            </a>
          </div>
        </div>
      </div>
      <div className="container py-5 ">
        <div class="row ms-5 ">
          <div class="col">
          <a  href="/sunsign/Virgo">
            <img
              src={horoscope6}
              class="img-fluid items rounded-circle"
              alt="..."
            />
            </a>
          </div>
          <div class="col">
          <a  href="/sunsign/Libra">
            <img
              src={horoscope7}
              class="img-fluid items rounded-circle"
              alt="..."
            />
            </a>
          </div>
          <div class="col">
          <a  href="/sunsign/Scorpio">
            <img
              src={horoscope8}
              class="img-fluid items rounded-circle"
              alt="..."
            /></a>
          </div>
          <div class="col">
          <a  href="/sunsign/Sagittarius">
            <img
              src={horoscope9}
              class="img-fluid items rounded-circle"
              alt="..."
            />
            </a>
          </div>
          <div class="col">
          <a  href="/sunsign/Capricorn">
            <img
              src={horoscope10}
              class="img-fluid items rounded-circle"
              alt="..."
            />
            </a>
          </div>
        </div>
      </div>
      <div className="container py-1 ">
        <div class="row" >
          <div class="col-6 px-auto last-colum ">
          <a  href="/sunsign/Aquarius">
            <img
              src={horoscope11}
              class="img-fluid items rounded-circle"
              alt="..."
            />
            </a>
          </div>
          <div class="col-6 ps-5">
          <a  href="/sunsign/Pisces">
            <img
              src={horoscope12}
              class="img-fluid items rounded-circle"
              alt="..."
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horoscope;
