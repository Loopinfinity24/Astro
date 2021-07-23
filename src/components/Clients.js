import React from "react";
import "../styles/Clients.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../images/client1.jpg";
import client2 from "../images/client2.jpg";
import "../styles/Banner.scss";
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }
const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides'
    
    
    // nextArrow: <SampleNextArrow />,
    //prevArrow: <SamplePrevArrow />
   
  };
  return (
    <div>
      
      <Slider {...settings} >
        <div class=" client-section py-5">
          <div class="card client-card text-center text-white">
            <div class="container client-container ">
              <h1 class="py-4">what clients are saying</h1>
              <div class="row">
                <div class="col-5 py-4 ps-5">
                  <img
                    src={client1}
                    class="card-img-top rounded-circle text-center client-img "
                    alt="..."
                  />
                </div>
                <div class="col-7 mt-5">
                  <p class="client-heading">Aqeel Ahmed</p>
                  <p class="client-sub-heading">
                  Aqeel Ahmed COO – RateGain January 29, 2017
                  </p>
                </div>
              </div>
            </div>
            <div class="client-text py-4">
              <p class="card-text ">
              Prashant is an incredible astrologer and human being. Having started off his career as an IT professional, he is definitely a very rational person who can advise you very well about your potential and tendencies and how you can tap them to the most and how to pretend your weaknesses from retarding your growth. His additional expertise of Ayurveda could be substantially useful for all.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div class="py-5 ">
            <div class="card client-card text-center text-white">
              <div class="container client-container ">
                <h1 class="py-4">what clients are saying</h1>
                <div class="row">
                  <div class="col-5 py-4 ps-5">
                    <img
                      src={client2}
                      class="card-img-top rounded-circle text-center client-img "
                      alt="..."
                    />
                  </div>
                  <div class="col-7 mt-5">
                    <p class="client-heading">Margaret Johri</p>
                    <p class="client-sub-heading">
                      Childcare specialist & administration Mgr <br />
                      september 16,2017
                    </p>
                  </div>
                </div>
              </div>
              <div class="client-text py-4">
                <p class="card-text ">
                Prashant Kapoor’s ji kindly gave me his time and shared his expertise and the astrology reading he provided me was extremely accurate and very timely as I had a very important decision to make and he has assisted me with this – highly recommended – he is a very kind and genuine person and I trust the understanding verse will continue to bless him with health and happiness – many many thanks sir – Very highly appreciated kind regards Margaret Johri
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
           </div>
           
      </Slider>
     
    </div>
  );
};
export default Clients;
