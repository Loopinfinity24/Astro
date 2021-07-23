import React from "react";
import "../styles/OurServices.scss";
import image1 from "../images/safrron-xd.png";
import image2 from "../images/predictionofmarraige.jpg";
import image3 from "../images/marraigeorlove.jpg";
import image4 from "../images/remedial.jpg";
import image5 from "../images/spouse.jpg";
import image6 from "../images/marital.jpg";
import image7 from "../images/spouse.jpg";
import image8 from "../images/vedic.jpg";
import image9 from "../images/marriedlife.jpg";
import image10 from "../images/loveanrel.png";
import image11 from "../images/vedicastro.png";
import image12 from "../images/medicalastro.png";
import image13 from "../images/carrerastro.png";
import image14 from "../images/astroreport.png";
import image15 from "../images/corporateastro.png";
import image16 from "../images/childastro.png";
import image17 from "../images/counselling.png";  
import image18 from "../images/marriedlife.jpg";
import image19 from "../images/vedicyagyas.png";
import image20 from "../images/bollywood.png"; 
import image21 from "../images/rudraksha.png";  
import image22 from "../images/vedicmuhurta.png"; 
import image23 from "../images/numerology.png";
import image24 from "../images/stockmarket.png"; 
import image25 from "../images/tarotastro.png";

const OurServices = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div class="col text-center"></div>
          <p className="services-heading text-center">Our Services</p>
          <p className=" text-center">
            We at AstroKapoor believe in "Health,Wealth and Prosperity" <br />
            In AstroKapoor we provide various consulting services, among which
            Medical Astrology and Corporate Astrology are key services.
          </p>
        </div>
        <div class="row">
          <div class="col">
            <div class="card-group">
              <div class="card service-card ">
                <a href="/services/17981">
                  {" "}
                  <img src={image10} class="card-img-top love-rel" alt="..." />
                </a>
                
              </div>
              <div class="card service-card ">
                <a href="/services/18002">
                  {" "}
                  <img src={image11} class="card-img-top" alt="..." />
                </a>
                
              </div>
              <div class="card service-card">
                <a href="/services/18004">
                  {" "}
                  <img src={image12} class="card-img-top" alt="..." />
                </a>
               
              </div>
              <div class="card service-card ">
                <a href="/services/18154">
                  {" "}
                  <img src={image13} class="card-img-top" alt="..." />
                </a>
                
              </div>
              <div class="card service-card ">
                <a href="/services/18126">
                  {" "}
                  <img src={image14} class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                  
                </div>
              </div>
              <div class="card service-card">
                <a href="/services/18187">
                  {" "}
                  <img src={image15} class="card-img-top" alt="..." />
                </a>
               
              </div>
              <div class="card service-card ">
                <a href="#">
                  {" "}
                  <img src={image16} class="card-img-top" alt="..." />
                </a>
                
              </div>
              <div class="card service-card ">
                <a href="#">
                  {" "}
                  <img
                    src={image17}
                    class="card-img-top counselling"
                    alt="..."
                  />
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <div class="row mx-auto">
          <div class="col">
            <div class="card-group">
              <div class="card service-card  ps-5">
                <a href="#">
                  {" "}
                  <img src={image10} class="card-img-top love-rel" alt="..." />
                </a>
               
              </div>
              <div class="card service-card ">
                <a href="#">
                  {" "}
                  <img src={image20} class="card-img-top vedic-astro  " alt="..." />
                </a>
               
              </div>
              <div class="card service-card">
                <a href="#">
                  {" "}
                  <img src={image21} class="card-img-top vedic-astro" alt="..." />
                </a>
                
              </div>
              <div class="card service-card ">
                <a href="#">
                  {" "}
                  <img src={image22} class="card-img-top vedic-astro" alt="..." />
                </a>
               
              </div>
      
              <div class="card service-card ">
                <a href="#">
                  {" "}
                  <img src={image23} class="card-img-top vedic-astro" alt="..." />
                </a>
               
              </div>
              <div class="card service-card  ">
                <a href="#">
                  {" "}
                  <img src={image24} class="card-img-top vedic-astro" alt="..." />
                </a>
               
              </div>
              <div class="card service-card pe-5 ">
                <a href="#">
                  {" "}
                  <img
                    src={image25}
                    class="card-img-top counselling"
                    alt="..."
                  />
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
{/*
      <div className="container py-2">
        <div class="row px-auto">
          <div class="col-lg-3">
            <div class="card">
              <img src={image2} class="card-img-top" alt="..." />
              <div class="card-body  ">
                <h6 class="card-title text-center">
                  Prediction Of My Marriage
                </h6>
                <p class=" text-center marraige-prediction">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <img src={image3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">
                  My Marriage Will Be Love Or Arranged
                </h6>
                <p class=" text-center">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹2,100.00</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={image4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">
                  Remedial Astrology For Delay In Marriage
                </h6>
                <p class=" text-center ">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 ">
            <div class="card">
              <img src={image5} class="card-img-top" alt="..." />
              <div class="card-body ">
                <h6 class="card-title text-center">
                  Spouse Search Name Report
                </h6>
                <p class=" text-center  marraige-prediction">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row px-auto">
          <div class="col-lg-3 py-4">
            <div class="card">
              <img src={image6} class="card-img-top" alt="..." />
              <div class="card-body  ">
                <h6 class="card-title text-center">
                  Marital Problems Solutions
                </h6>
                <p class=" text-center ">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 py-4">
            <div class="card">
              <img src={image7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">
                  Spouse Search Name Report
                </h6>
                <p class=" text-center">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹2,100.00</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 py-4">
            <div class="card">
              <img src={image8} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">Vedic Matchmaking</h6>
                <p class=" text-center ">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 py-4 ">
            <div class="card">
              <img src={image9} class="card-img-top" alt="..." />
              <div class="card-body ">
                <h6 class="card-title text-center">
                  How Will Be My Married Life
                </h6>
                <p class=" text-center">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="button" class="btn  services-btn">
            VIEW MORE
          </button>
        </div>
      </div>
   */}
      </>
  );
};
export default OurServices;
