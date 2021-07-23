import React, { useState, useEffect } from "react";
import { Button, Nav} from 'react-bootstrap';
import '../scss/App.scss';
import '../scss/font.scss';
import social1 from '../images/social1.png';
import social2 from '../images/social2.png';
import social3 from '../images/social3.png';
import social4 from '../images/social4.png';
import social5 from '../images/social5.png';
import logo from '../images/logo1.png';
import axios from 'axios';
function Footer() {
     const [blo, setBlo] = useState([])

  useEffect(() => {

    axios.post('http://localhost:4000/api/category/main-list')

        .then(res => {
           // console.log(res.data);
            setBlo(res.data.data);
        })
        .catch(err => {
            console.log(err);
        })
})

     return (
          <div className="Footer" id="contactus">
               <div className="links"><img className="logo" src={logo} alt="logo" />
               <br/> <br/>
                           <p className="footer_heading" id="heading">FOLLOW US</p>
                    <div className="social_icon">
                         <a href="https://www.youtube.com/channel/UCpg-rSVxo3EgwEmWHl2nN9A/videos" target="_blank"> <img className="footer_social_icons" src={social1} alt="social icons" /></a>
                         <a href="https://www.facebook.com/astrokapoorcom/" target="_blank"><img className="footer_social_icons" src={social3} alt="social icons" /></a>
                         <a href="https://twitter.com/@Astrokapoor" target="_blank"><img className="footer_social_icons" src={social2} alt="social icons" /></a>
                         <a href="http://in.linkedin.com/in/astrokapoor" target="_blank"> <img className="footer_social_icons" src={social4} alt="social icons" /></a>
                         <a href="https://plus.google.com/+ParshantKapoor" target="_blank"><img className="footer_social_icons" src={social5} alt="social icons" /></a>

                    </div>
               </div>
               <div className="links">
                    <p className="footer_heading">OTHER LINKS</p>
                    <ul>
                         <li><a href="/about" className="footer_para">About Us</a></li>
                         {/*
                         <li><a href="" className="footer_para">Affiliates</a></li>
                         <li><a href="" className="footer_para">Returns & Exchanges</a></li>
                         <li><a href="" className="footer_para">Terms & Conditions</a></li>
                         <li><a href="" className="footer_para">Privacy Policy</a></li>
                         <li><a href="" className="footer_para">Testimonial</a></li>
                         <li><a href="" className="footer_para">Case Study</a></li>*/}
                    </ul>

                    <p className="footer_heading" id="heading">OUR EXPERTS</p>
                    <ul>
                    <li><a href="/content/Vipin Kapoor" className="footer_para">Vipin Kapoor</a></li>
                    <li><a href="/content/Prashant Kapoor" className="footer_para">Prashant Kapoor</a></li>
                    <li><a href="/content/Dr. Satarupa Bhattacharjee Kapoor" className="footer_para">Dr. Satarupa Bhattacharjee</a></li>
                    <li><a href="/content/Akanksha Srivastava" className="footer_para">Akanksha Srivastava</a></li>
                    </ul>
                    
               </div>
               <div className="links">
                    <p className="footer_heading">SERVICES</p>
                    <ul>

                    {blo.map((row, index) => (

<li><a href={`/services/${row.id}`} className="footer_para">{row.name}</a></li>
            
                                      ))
                                      
          }
                    </ul>
               </div>
               <div className="links">
               <p className="footer_heading">PRODUCTS</p>
               <ul>
               <li><a href="" className="footer_para">Gemstone</a></li>
               <li><a href="" className="footer_para">Gemstone Rosaries</a></li>
               <li><a href="" className="footer_para">Deity Lockets Ganesha</a></li>
               <li><a href="" className="footer_para">Nepali Rudraksha Beads</a></li>
               <li><a href="" className="footer_para">Indonesian Rudraksha Beads</a></li>
               <li><a href="" className="footer_para">Rudraksha Mala-Roseries</a></li>
               <li><a href="" className="footer_para">Vastu Products</a></li>
               <li><a href="" className="footer_para">Tantra Products</a></li>
               <li><a href="" className="footer_para">Shivaling Idols</a></li>
               </ul>
                    <br />
                    <p className="footer_heading">Contact us</p>
                    <p className="footer_para">astrokapoor@gmail.com</p>
                    <p className="footer_para"><ul><li>91888111000</li></ul></p>


               </div>
               {/* <div className="links">
        <p className="footer_heading">ABOUT US</p>
        <p className="footer_para" id="about_text"> The Astro Kapoor offers a range of Astrology Consultations, Medical Astrology, Gemology, horoscope, Match making, predictions, Vaastu, astrological remedies. Read More </p>
       <p className="footer_heading" id="heading">NEWSLETTER</p>
       <Button variant="light" className="button_text">E-Mail</Button>
       <Button variant="outline-light" className="button_text">SUBSCRIBE</Button>
        </div><br/> */}
          </div>

     );
}

export default Footer;
