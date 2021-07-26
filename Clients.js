import React from "react";
import "../styles/Clients.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../images/client1.jpg";
import "../styles/Banner.scss";
const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
     
  };
  return (
    <div>
      
      <Slider {...settings}>
        <div class=" client-section py-5">
          <div class="card client-card text-center text-white">
            <div class="container client-container ">
              <h1 class="py-4">What Clients Are Saying</h1>
              <div class="row">
                <div class="col-5 py-4 ps-5">
                  <img
                    src={client1}
                    class="card-img-top rounded-circle text-center client-img "
                    alt="..."
                  />
                </div>
                <div class="col-7 mt-5">
                  <p class="client-heading">Mr.nitesh roy</p>
                  <p class="client-sub-heading">
                    Childcare specialist & administration Mgr <br />
                    september 16,2017
                  </p>
                </div>
              </div>
            </div>
            <div class="client-text py-4">
              <p class="card-text ">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div class="py-5 ">
            <div class="card client-card text-center text-white">
              <div class="container client-container ">
                <h1 class="py-4">What Clients Are Saying</h1>
                <div class="row">
                  <div class="col-5 py-4 ps-5">
                    <img
                      src={client1}
                      class="card-img-top rounded-circle text-center client-img "
                      alt="..."
                    />
                  </div>
                  <div class="col-7 mt-5">
                    <p class="client-heading">Mr.nitesh roy</p>
                    <p class="client-sub-heading">
                      Childcare specialist & administration Mgr <br />
                      september 16,2017
                    </p>
                  </div>
                </div>
              </div>
              <div class="client-text py-4">
                <p class="card-text ">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class=" py-5">
            <div class="card client-card text-center text-white">
              <div class="container client-container ">
                <h1 class="py-4">What Clients Are Saying</h1>
                <div class="row">
                  <div class="col-5 py-4 ps-5">
                    <img
                      src={client1}
                      class="card-img-top rounded-circle text-center client-img "
                      alt="..."
                    />
                  </div>
                  <div class="col-7 mt-5">
                    <p class="client-heading">Mr.nitesh roy</p>
                    <p class="client-sub-heading">
                      Childcare specialist & administration Mgr <br />
                      september 16,2017
                    </p>
                  </div>
                </div>
              </div>
              <div class="client-text py-4">
                <p class="card-text ">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div class="text-center py-5">
      <button type="button" class="btn btn-secondary px-5 me-5">VIEW ALL</button>
      <button type="button" class="btn btn-secondary ms-5">ADD A TESTIMONIAL</button>
      </div>
    </div>
  );
};
export default Clients;
