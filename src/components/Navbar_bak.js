import React from "react";


import { UserAddOutlined,SearchOutlined,HeartFilled} from  '@ant-design/icons';
import image1 from "../images/logo1.png";
import  "../styles/Navbar.scss";




const Navbar = () =>{
    return(
   
        <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
        <img src={image1} class="img-fluid" alt="..."/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              
              <li class="nav-item">
                <a class="nav-link" href="/blog">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact us</a>
              </li>
              
              
            </ul>
            <div class="d-flex">
            
            <SearchOutlined  className="icon"/>
            <UserAddOutlined className="icon" />
            <HeartFilled className="icon" />
            
           
              
            </div>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;