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

function Prediction() {
  return (
    <div className="container  horoscope py-3" style={{marginTop:'3%'}}>
      <div>
        <p className="services-heading text-center text-white ">LATEST TRUE PREDICTION</p>
        <div class=" text-center arrow">
          <img src={horoscope0} class="img-fluid text-center" alt="..." />
        </div>
        <p style={{textAlign:'left !important',marginLeft:'7%',marginRight:'7%'}}>
        Prashant Kapoor has specialized in Medical Astrology, Corporate Astrology, Vedic Jyotish, 
        Prasna Kundli also predicts on the major events of one’s life including Health, wealth, Peace,
         Prosperity, Career, Chronicle diseases, Psychological disorders, Financial prospects, Marriage/Love
          life/Romance/Divorce, Match Making, Education, Litigation, 
        Property, House/Vehicle/Assets Purchase, Foreign Travel, Conceiving Child, Longevity.
        <br/>
        <br/>
        Prashant Kapoor has around 28 years of experience in Astrology/Medical Astrology/Vedic Jyotish 
        and very importantly provides guaranteed solution for Fertility/Impotency Cure & Treatment with
         the help of Medical Astrology/Vedic Jyotish. There are various Fertility/Impotency cases which
          he has successfully solved which were not curable by medical science.
        </p>
        <div className=" container video-btn">
        <a href="https://www.youtube.com/results?search_query=true+prediction+by+prashant+kapoor" target="_blank" className="btn-video">
          Click Here For More Details
        </a>
        
      </div>
      </div>
    </div>
  );
}

export default Prediction;
