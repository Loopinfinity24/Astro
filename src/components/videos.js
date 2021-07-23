import React, { useState, useEffect } from "react";
import axios from 'axios';
import Slider from "react-slick";
import '../scss/App.scss';
import '../scss/font.scss';
import divider from '../images/Line 61.png';
import ReactPlayer from 'react-player';
import expert1 from '../images/expert1.jpg';
import expert2 from '../images/expert2.jpg';
import expert3 from '../images/expert3.jpg';
import expert4 from '../images/expert4.png';
import icon1 from '../images/Vector (3).png';
import icon2 from '../images/Vector (4).png';
import icon3 from '../images/Vector(5).png';
function Vedios() {
    const [vedio, setVedio] = useState([])
    useEffect(() => {

        axios.post('http://localhost:4000/api/product/getAllvideos')

            .then(res => {
                //console.log(res.data);
                setVedio(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    })
    const getDate = (date) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString([], options);
    }
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };

    return (
        <div className="Blogs" style={{ marginTop: '5%' }} >
           <hr></hr>
            <p className="services-heading text-center">LATEST VIDEOS</p>
          
            
            <img className="divider" src={divider} alt="divider" />
            <div className="horoscope_carousel">
            <Slider {...settings} className="slider">
{vedio.map((row, index) => (
    <div key={index} className="expert_slider">
 
<div className="expert_image">
                           <ReactPlayer
                               url={row.videourl}
                               controls
                               
                               width="385px"
                               height="290px"
                           />
                       </div>
                       <div className="expert_cart_text1">
                           <div className="expert_name">
                               <p className="expert_text">{row.videotitle}</p>
                               <p className="expert_text">{getDate(row.createdAt)}</p>
                           </div>
                       </div>

    
    </div>
))}

    

</Slider>
<div className=" container video-btn">
        <a href="/video" className="btn-video">
          VIEW ALL
        </a>
        <hr></hr>
      </div>

      <div class="container">
        <h2>Best Astrologer Online – AstroKapoor</h2>
        <p>
          In order to seek peace and serenity, the spiritual beings follows
          pious ways. Having an existence in a fast paced life it is important
          to halt and notice where this path is leading to and what surprises it
          conceals. The{" "}
          <strong>
            <em>Best Astrologer Online</em>
          </strong>{" "}
          Astro Kapoor is a power packed combination of astrology and technology
          expertise which are aimed at exploring the Astrological world with a
          broader insight.
        </p>
        <h2>Future Prediction By Experts – Best Astrologer Online</h2>
        <p>
          We share expertise in predicting the future in calming the natural
          anxieties of the individuals. We at Astro Kapoor guide you through
          each and every aspect of life-{" "}
          <a href="https://astrokapoor.com/product/career-report/">career</a>,{" "}
          <a href="https://astrokapoor.com/marriage-astrology-prediction/">
            marriage
          </a>
          ,{" "}
          <a href="https://astrokapoor.com/significance-of-medical-astrology/">
            health &amp; medical
          </a>
          ,{" "}
          <a href="https://astrokapoor.com/product/finance-report/">finance</a>,{" "}
          <a href="https://astrokapoor.com/product/family-astrology/">
            child’s birth
          </a>{" "}
          and family.
        </p>
        <p>
          Our{" "}
          <a href="https://astrokapoor.com/about-astrokapoor/">
            expert team of astrologers
          </a>{" "}
          specializes in various arenas of astrology which have extensive
          knowledge regarding the predictions and planetary movements and
          effects and provide accurate guidance for the same. Our aim is to
          provide unique guidance and dealing with the most challenging queries
          with best utilization of expertise.
        </p>
        <h2>
          We Help in Making Your Future Better – Online Astrology Services
        </h2>
        <p>
          Our astrological predictions are focused on improving the life
          phenomenon and making the future a better place. We guide the clients
          by analyzing the horoscopes which is the reason of unwavering faith in{" "}
          <a href="https://astrokapoor.com/product/five-years-astrological-predictions/">
            astrological predictions
          </a>
          . We advise you with the sustained results in any life parameter like
          health and finances by referring to astrology and readings.
        </p>
        <p>
          If you are Confused what route to choose in your career?&nbsp; When
          will you get married? What will be the fruits of financial
          investments?&nbsp; You can contact{" "}
          <strong>
            <em>Best Astrologer Online</em>
          </strong>{" "}
          Astro Kapoor for the expert guidance and relevant suggestions to your
          problems.
        </p>
        <h2>World’s Best Astrologers Online – AstroKapoor</h2>
        <p>
          Astrology as a predictive sign facilitates the astrologers to analyze
          the person’s life considering the unique traits a person has from the
          birth to the present. The individual have a firm belief on the
          planetary transitions for predicting what lays ahead in life.
        </p>
        <h2>
          Years of Experience in Astrology – World’s Best Astrologers Online
        </h2>
        <p>
          The astrology chart holds great prominence in astrological readings.
          The <strong>world’s famous astrologer</strong> Astro Kapoor is
          considered as the rising star in the astrology world today with having
          great expertise in{" "}
          <a href="https://astrokapoor.com/product-category/vedic-astrology/">
            Vedic astrology
          </a>
          .
        </p>
        <p>
          Astrologers at Astro Kapoor are one of the most sought after
          astrologers by the Corporates and Business man. The astrology
          specialists at Astro Kapoor are encouraged by the belief in
          establishing a complete balance between Health, Wealth, Peace and
          Prosperity and predict what the future entails accurately by{" "}
          <a href="https://astrokapoor.com/category/our-blogs/planets/">
            analyzing the planetary movements
          </a>{" "}
          in sync with the energy of the individuals.The purpose is to make the
          occult science, Astrology available across the India with just a click
          of a button.
        </p>
        <h3>
          Clear &amp; Complete Insights for Your Future – Consult Wordl’s Best
          Astrologer
        </h3>
        <p>
          The aim is to make the world technically optimized by aligning the
          technology and astrology for giving the clear and complete insight
          about the future to the individuals.
        </p>
        <p>
          We provide the best customer support 24/7 and counsel individuals
          during the struggling phase in their life with the best use of
          knowledge and expertise. You can consult the{" "}
          <strong>world’s famous astrologer</strong> by{" "}
          <a href="https://astrokapoor.com/contact/">
            scheduling an appointment online
          </a>
          .
        </p>
      </div>


</div>
          </div>
    );
}

export default Vedios;
