import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../scss/App.scss';
import '../scss/font.scss';
import Slider from "react-slick";
import divider from '../images/Line 61.png';



function BlogPage() {
    const [blo, setBlo] = useState([])
    useEffect(() => {

        axios.post('http://localhost:4000/api/product/getAlldesginList')

            .then(res => {
               // console.log(res.data);
                setBlo(res.data.data);
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
        <div className="Blogs"  >
           <p className="services-heading text-center">LATEST BLOGS</p>
          
            <img className="divider" src={divider} alt="divider" />

            <p className="text1">Read our blogs written by our experts, you will know many interesting facts about divine science.<br/>Also, you will get glimpses how AstroKapoor works, and how people have been benefited by availing AstroKapoor services.</p>
      <p className="text1">  </p>
      
          

            <div className="horoscope_carousel">
            <Slider {...settings} className="slider">
{blo.map((row, index) => (
    <div key={index} className="expert_slider">
 
<div className="expert_image">
  <a href={"/blogs/" + row.id} >
<img className="expert_cart_image" src={row.imgUrl} alt="cart image" /></a> 
                       </div>
                       <div className="expert_cart_text">
                           <div className="expert_name">
                               <p className="expert_text">{row.desgin_type}</p>
                               <p className="expert_text">{getDate(row.createdAt)}</p>
                           </div>
                       </div>

    
    </div>
))}

    

</Slider>

</div>




             </div>
    );
}

export default BlogPage;
