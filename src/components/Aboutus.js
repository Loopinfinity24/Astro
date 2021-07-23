import React from 'react'
import '../scss/about.scss'


import Navbar from './Navbar';
import Footer from './Footer';
import divider from '../images/Line 61.png';
import Slider from "react-slick";
import expert1 from '../images/expert1.jpg';
import expert2 from '../images/expert2.jpg';
import expert3 from '../images/expert3.jpg';
import expert4 from '../images/expert4.png';
import icon1 from '../images/Vector (3).png';
import icon2 from '../images/Vector (4).png';
import icon3 from '../images/Vector(5).png';

const Aboutus =()=>{
    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
    
        ]
      };
  return(
    <div className="aboutus">
        <Navbar />
        <div className="header_image">
           <span className="header_text1">ABOUT US</span>
        </div>
        <div className="about" style={{marginTop:'20px'}}>
            <p>The Astro Kapoor offers a range of Astrology Consultations, Medical Astrology, Gemology, horoscope, Matchmaking, predictions, Vaastu, astrological remedies. Get valuable information with an in-depth astrological birth, compatibility or relocation reading. The Astro Kapoor also provides the training needed to become a professional astrologer. Learn more about the astrological topics that make astrology an exciting and rewarding profession. Astrological expertise can be applied to many different areas of business and finance, personal counseling (individual, group, marriage, and family).</p>
            <p>The Astro Kapoor is founded by Mr.Vipin Kapoor a renowned astrologer belonging to Himachal Pradesh, he has established a research center also by the name of Shri Saraswati Jyotish Research Centre and has gained wide recognition as the originator. The other astrologers in Astro Kapoor team are:-</p>
            <p>The word ‘Jyotish’ has derived from ‘jyot + isha’. ‘Jyot’ implies to “light” and ‘isha’ to ‘lord’. It is also known as Vedic Astrology, an extant form of ancient astrology still practiced in India as a name of Indian Astrology. Jyotish is the instructional constituent of the Rig Veda, and as such is a Vedanga, or “body part” of the Vedas. Jyotish is called the Eye of the Veda, for its ability to see into the future. Jyotish has historically been part of a continuous “holistic” approach to living and to spiritual practice within the life of Hindus predominant in India. The birth chart cast on the Indian System is truly unique since the Indian system makes corrections for the fact that our Zodiac / Universe is moving and not fixed ( by the Big Bang theory of creation of).</p>
            <p>Also in Indian Astrology which is known as the best Vedic astrology, it is considered that the zodiac is elliptic and not circular due to which the twelve houses in a birth chart are not 30 degree each but varying according to the time of birth. Owing to these differences the birth chart prepared following Indian system would come out different from that shown on any other system. It is also considered to be much more accurate.</p>
            <p>Astrokapoor group of astrologers(one of the best Vedic astrology providers) is one of those group whose potency of knowledge is based on the historical concepts, therefore, providing the best and most accurate predictions. The specialists of this panel believe in “Health”, “Wealth” “Peace” and “Prosperity” and provide best of their remedies to achieve a peaceful life with good health, wealth and happiness.</p>
            <h2 className="text123">Vision – The Brain behind AstroKapoor</h2>
            <p>It was Mr. Prashant Kapoor who came up with an extra ordinary idea to make unique kind of e-commerce solution having everything from all the services to end products. He had a vision to reform this organization as a platform where all kind of resources were introduced from services to products which were available for retail as well as wholesale customers. This is also a vision that AstoKapoor should become one of the leading astrology websites in the world.</p>
            <h2 className="text123">Strategy:</h2>
            <p>To implement his vision into reality he initially Studied various online applications and studied both good things and gaps in each of them and tried to integrate the feature along with mending those gaps. It was found that few astrological websites were best in the terms of their presentation, GUI, Technology, Contents etc. But there was not a single website that could offer the complete solutions. Finally, it was decided to make one of the best astrology website and made framework for it.</p>
            <p>It was quite clear after studying the various online solution and found that in this industry, client who is searching any best astrologer who provide consultation, will never go to buy divine science products like gemstones, Rudraksha, Vastu products etc. at the same time. at one time either client would buy the service or product.</p>
            <p>And finally, E-commerce solution was divided into two different websites which were interlinked in such a way where end client is now able to buy a service and a product on the same platform without any hassle.</p>
            <h5>1. AstroKapoor.Com</h5>
            <p>Divine science Services – Astrology, Numerology, Medical Astrology, Vedic Astrology, Tarot, Astrology Knowledge contents etc. were given in this part as a separate solution.</p>
            <h5>2. AstroKapoor.Net</h5>
            <p>Divine science Products – Loose Gemstones, Gemstone Lots Wholesale, Rudraksha, Vastu Products etc. were moved in this solution.</p>
            <h2  className="text123">Difficulties:</h2>
            <p>AstroKapoor was Already running as an e-commerce website with huge contents and products since 2014 with few limitations so it was being difficult to revamp the application without losing its core properties and data. It was a pressure to plug everything best available in the running applications in this domain worldwide and also plugin something new which was beyond the thought of anyone. It was not easy task to decide the best technologies to be implemented in a short span of time with excellent results for making such a huge astrology website in the world. Lack of best resources was also there even after the selection of new technology environment. Finally got the excellent resources who could sink with the brain of Mr. Prashant Kapoor and implementation done with successfully implementation. It was challenge to make one of top best leading astrology website in the world having maximum database than anyone in this domain and for this had to select the best resources from the market.</p>
            <h2  className="text123">Resource Handling</h2>
            <p>The team of best trouble-shooters were hired who were skilled in their particular domain. Teams were divided to make a set of piece as per their domain expertise making sure they sink with each team to integrate the product finally without any failure.</p>
            <h5>Outcome:</h5>
            <p>Finally, product launched after successful implementation in the way it was planned. It took a lot of hard work because of which the vision came into existence. It is now divided into two parts:</p>
            <p>AstroKapoor.Com – For all kind of divine science services like Astrology, Tarot, Numerology etc.</p>
            <p>AstroKapoor.Net – Selling all kind of gemstones, Rudaksha, Jewellery Items, Vastu Products etc.</p>
            <p>AstroKapoor is world’s leading website and ranking in number one position where it contains the products for both end user and wholesale buyers.</p>
            <h5>Upgradation</h5>
            <p>After relaunching new technology products in Oct 2018, now sites are being upgraded after every two months with new ideas and current technologies available for end user prospective.</p>
        </div>
        <div className="Experts">
        {/*
        <div className="our_services" >
            <p className="our_services_text">OUR ASTROLOGER</p>
            <img className="divider" src={divider} alt="divider" />
        </div>
        
        <div className="horoscope_carousel" style={{marginTop:30}}>
          <Slider {...settings} className="slider">
             
            <div className="horoscopeWrapper">
                <img className="horoscope_image" src={expert1} alt="horoscope" />
                <p className="expert_name" >Vipin Kapoor</p>
                <p className="professional_name">Astrologer</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={expert2} alt="horoscope" />
                <p  className="horoscope_text" >Prashant Kapoor</p>
                <p className="professional_name">Astrologer</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={expert3} alt="horoscope" />
                <p className="horoscope_text" >Satarupa Kapoor</p>
                <p className="professional_name">Gemologist</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>

            <div className="horoscopeWrapper">
                <img  className="horoscope_image" src={expert4} alt="horoscope" />
                <p  className="horoscope_text" >Akansha Sharma</p>
                <p className="professional_name">Numerologist</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={expert1} alt="horoscope" />
                <p className="expert_name" >Vipin Kapoor</p>
                <p className="professional_name">Astrologer</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={expert2} alt="horoscope" />
                <p  className="horoscope_text" >Prashant Kapoor</p>
                <p className="professional_name">Astrologer</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>
            
            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={expert3} alt="horoscope" />
                <p className="horoscope_text" >Satarupa Kapoor</p>
                <p className="professional_name">Gemologist</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>
        </Slider>
    </div>
  */}
    </div>
    <Footer />
    </div>
  );
}
export default Aboutus;