import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";



import Navbar from "./Navbar";
import Banner from "./Banner";
import OurServices from "./OurServices";
import Products from "./Products";
import Horoscope from "./Horoscope";
import Clients from "./Clients";
import Experts from "./Experts";
import BlogPage from "./BlogPage";
import Footer from "./Footer";
import Videos from "./videos";
import Prediction from "./Prediction";
import Redirect_another from "./Redirect_another";


function HomePage() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <Prediction/>
   <OurServices/>
   <Products/>
   <Horoscope/>
   <Clients/>
   <Experts/>
   <BlogPage/>
   <Videos/>
   <Redirect_another/>
   <Footer/>
   
   </>
  );
}

export default HomePage;
