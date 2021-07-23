import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/App.scss';
import '../scss/font.scss';
import '../scss/blog.scss';
import '../scss/about.scss';
import { Card, Button, Form, Col, InputGroup, FormControl, Modal, Breadcrumb } from 'react-bootstrap'
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import search from "../images/search.png";
import fb from "../images/facebook.png";
import wp from "../images/twitter.png";
import yb from "../images/linkedin.png";
import insta from "../images/google-plus.png";
import calendar from "../images/schedule.png";
import comment from "../images/comments.png";
import {Helmet} from "react-helmet";

function Servicespage(props) {
  const url = "http://localhost:8080/api/consultation"
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [oneposts, setOnePosts] = useState([])

  const [comments, setComments] = useState({
    comments: {
      name: "",
      email: "",
      comment: "",
      website: "",
      ans: ""
    }
  })

  function submitComment(e) {
    e.preventDefault();
    console.log(e)
    axios.post('http://localhost:8080/api/blog/' + props.match.params.id + '/comments', {
      "comments": {
        "name": comments.name,
        "email": comments.email,
        "comment": comments.comment,
        "website": comments.website,
        "ans": comments.ans
      }
    }
    )
      .then(res => {
        console.log(res.data)
        alert("Successfully inserted Comment");
      })
  }

  function handleComment(e) {
    const newData = { ...comments }
    newData[e.target.id] = e.target.value
    setComments(newData)
    console.log(newData)
  }

  const [consultent, setConsultent] = useState({
    birthHour: "",
    birthPlace: "",
    dob: "",
    option1: "",
    mobileNumber: "",
    email: "",
    name: ""
  })

  useEffect(() => {
    //axios.post('http://localhost:4000/api/product/getAlldesginList')getpostbyid
    axios.post('http://localhost:4000/api/category/getservicesbasedserviceId',{postid:props.match.params.id})
      .then(res => {
        console.log(res.data);
        setOnePosts(res.data.data);
       // localStorage.removeItem('myData');
       // localStorage.setItem('myData', res.data.data.comments.length);
      })
      .catch(err => {
        console.log(err);
      })
  })

  function submit(e) {
    e.preventDefault();
    console.log(e)
    axios.post(url, {
      "birthHour": consultent.birthHour,
      "birthPlace": consultent.birthPlace,
      "dob": consultent.dob,
      "option1": consultent.option1,
      "mobileNumber": consultent.mobileNumber,
      "email": consultent.email,
      "name": consultent.name
    }
    )
      .then(res => {
        console.log(res.data)
        alert("Successfully inserted");
        handleClose();
      })
  }

  function handle(e) {
    const newData = { ...consultent }
    newData[e.target.id] = e.target.value
    setConsultent(newData)
    console.log(newData)
  }

  const getDate = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString([], options);
  }

  return (
    <>
      <Navbar />
      <div>
      <Helmet>
                <meta charSet="utf-8" />
                
                <title>{oneposts[0] ? oneposts[0].seotitle : 'Astrokapoor Services'}</title>
                <meta name="title" content={oneposts[0] ? oneposts[0].seotitle : ''}/>
                <meta name="description" content={oneposts[0] ? oneposts[0].seometadesc : ''} />
                <meta name="keywords" content={oneposts[0] ? oneposts[0].focusseoword : ''} />
               
            </Helmet>

        {/* {posts.map(post => { 
        return(
        <div> */}
        <div className="header_image">
        <span className="header_text1">Services</span>
       
       <Breadcrumb className="header_text2" style={{float:'right',marginRight:'50%',height:'100px',marginTop:'-106px',fontSize:'23px'}}>
         <Breadcrumb.Item href="/" style={{color:'#f59042'}}>Home </Breadcrumb.Item>
        
         <Breadcrumb>
         
         </Breadcrumb>
         </Breadcrumb>
        </div>
        <div className="row" id="blog" style={{ marginTop: '3%',marginLeft:'0px',marginRight:'0px' }}>
      
          <div className="col-md-3">
            {/*
            <InputGroup className="mb-2 mr-sm-2">
              <InputGroup.Prepend>
                <InputGroup.Text><img src={search} alt="search" style={{ width: 15, height: 15 }} /></InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="inlineFormInputGroupUsername2" placeholder="Search" />
            </InputGroup>*/}
          


            <div class="card2">
            <div class="card-body">
              
              <p className="services-heading1 text-center">GET FREE CONSULTATION</p>

              <form>
  <div class="row mb-2">
  <div class="col-sm-12">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="First Name *"/>
    </div>
    </div>
    <div class="row mb-2">
  <div class="col-sm-12">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="Last Name *"/>
    </div>
  </div>
  <div class="row mb-2">
  <div class="col-sm-12">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="Email *"/>
    </div>
    </div>
    <div class="row mb-2">
  <div class="col-sm-12">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="Mobile No. *"/>
    </div>
   
  </div>
  <div class="row mb-2">
  <div class="col-sm-12">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="Gender *"/>
    </div>
    </div>
    <div class="row mb-2">
  <div class="col-sm-12">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="Date Of Birth *"/>
    </div>
   
  </div>
  
  <div class="row mb-2">
  <div class="col-sm-12">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="Birth Place *"/>
    </div>
    </div>
    <div class="row mb-2">
  <div class="col-sm-12">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="Birth Hour *"/>
    </div>
  
  </div>
  <div class="row mb-2">
  <div class="col-sm-12">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="Birth Minute *"/>
    </div>
    </div>
    <div class="row mb-2">
  <div class="col-sm-12">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="Birth second *"/>
    </div>
    
  </div>

 
  <div class="input-group" style={{marginTop:'10px'}}>
  <div class="col-sm-12">
  <textarea class="form-control" aria-label="With textarea" placeholder="Concern *"></textarea>
  </div>
</div>
<div className="text-center py-3">
<button type="button" class="btn btn-secondary">Submit</button>
</div>
  
</form>
            </div>
          </div>
      


          </div>
          <div className="col-md-8" >
            <img src={oneposts[0] ? oneposts[0].imgUrl : ''} alt="blog1" className="blog1" />
            <h1 className="blogHeading">{oneposts[0] ? oneposts[0].sub_name : ''}</h1>
            <div className="social" style={{ justifyContent: 'flex-start', marginBottom: '2%', marginTop: '3%' }}>
              <div className="calendar">
                <img src={calendar} alt="calendar" />
                <Card.Text style={{ color: '#f59042' }} className="blog_content">{oneposts[0] ? getDate(oneposts[0].createdAt) : ''}</Card.Text>
              </div>
              
            </div>
            {oneposts[0] ? <div dangerouslySetInnerHTML={{ __html: oneposts[0].description }}></div> : ''}
            
            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '10px' }}>
              <p>SHARE THIS ON:</p>
              <div className="icon">
                <a href="http://www.facebook.com/sharer.php?u=https://astrokapoor.com/saturn-retrograde-2021/&amp;i=https://astrokapoor.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-17-at-10.27.22-PM-2.jpeg&amp;t=Saturn Retrograde 2021"><img src={fb} alt="fb" /></a>
                <a href="https://twitter.com/intent/tweet?text=Saturn Retrograde 2021&amp;url=https://astrokapoor.com/saturn-retrograde-2021/"><img src={wp} alt="wp" /></a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://astrokapoor.com/saturn-retrograde-2021/&amp;title=Saturn Retrograde 2021"><img src={insta} alt="insta" /></a>
                <a href="https://plus.google.com/share?url=https://astrokapoor.com/saturn-retrograde-2021/"><img src={yb} alt="yb" /></a>

              </div>
            </div>
            
           </div>
          <div className="col-md-1"></div>
        </div>
        {/* </div>
    );
    })} */}
      </div>
      <Footer />
    </>
  );
}

export default Servicespage;
