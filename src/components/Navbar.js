import React, { useState, useEffect } from "react";
import  "../styles/Navbar.scss";
import image1 from "../images/logo1.png";
import axios from 'axios';
import { UserAddOutlined,SearchOutlined,HeartFilled} from  '@ant-design/icons';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';


function NavBar() {

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

    <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
    <a  href="/">
    <img src={image1} class="img-fluid" alt="..."/>
    </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          
          <li class="nav-item px-4">
            <a class="nav-link" href="/about">About</a>
          </li>


          <NavDropdown title="Services" id="basic-nav-dropdown" class="nav-link">
          {blo.map((row, index) => (
            <div>
                                        <NavDropdown.Item href={`/services/${row.id}`} className="Item">{row.name}</NavDropdown.Item>
                                        <NavDropdown.Divider /></div>
                                      ))
                                      
          }
        
 
    
            </NavDropdown>
          

          
          <li class="nav-item px-4">
            <a class="nav-link" href="/product">Products</a>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link" href="/blogs">Blogs</a>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link" href="https://www.youtube.com/results?search_query=true+prediction+by+prashant+kapoor" target="_blank">True Prediction</a>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link" href="/contact">Contact us</a>
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

export default NavBar;
