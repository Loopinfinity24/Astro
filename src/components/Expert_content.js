import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/App.scss';
import '../scss/font.scss';
import '../scss/blog.scss';
import '../scss/about.scss';
import { Card, Button, Form, Col, InputGroup, FormControl, Modal, Breadcrumb } from 'react-bootstrap'
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import search from "../images/search.png";
import fb from "../images/facebook.png";
import wp from "../images/twitter.png";
import yb from "../images/linkedin.png";
import insta from "../images/google-plus.png";
import calendar from "../images/schedule.png";
import comment from "../images/comments.png";
import {Helmet} from "react-helmet";
import ico1 from '../images/horo/ico1.png'
import ico2 from '../images/horo/ico2.png'
import ico3 from '../images/horo/ico3.png'
import ico4 from '../images/horo/ico4.png'
import ico5 from '../images/horo/ico5.png'
import ico6 from '../images/horo/ico6.png'
import ico7 from '../images/horo/ico7.png'
import ico8 from '../images/horo/ico8.png'
import ico9 from '../images/horo/ico9.png'
import ico10 from '../images/horo/ico10.png'
import ico11 from '../images/horo/ico11.png'
import ico12 from '../images/horo/ico12.png'

function Expert_content(props) {

  console.log("dfbnbf");
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
    console.log("ghgh");
    //axios.post('http://localhost:4000/api/product/getAlldesginList')getpostbyid
    axios.post('http://localhost:4000/api/product/getsunsignName',{postid:props.match.params.id})
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
                
                <title>{oneposts[0] ? oneposts[0].seotitle : 'Astrokapoor Team'}</title>
                <meta name="title" content={oneposts[0] ? oneposts[0].seotitle : ''}/>
                <meta name="description" content={oneposts[0] ? oneposts[0].seometadesc : ''} />
                <meta name="keywords" content={oneposts[0] ? oneposts[0].focusseoword : ''} />
               
            </Helmet>

        {/* {posts.map(post => { 
        return(
        <div> */}
        <div className="header_image">
        
           <span className="header_text1">Our Team</span>
       
          <Breadcrumb className="header_text2" style={{float:'right',marginRight:'50%',height:'100px',marginTop:'-106px',fontSize:'23px'}}>
            <Breadcrumb.Item href="/" style={{color:'#f59042'}}>Home/ </Breadcrumb.Item>
            <Breadcrumb>
            {oneposts[0] ? oneposts[0].signname : ''}
            </Breadcrumb>
            </Breadcrumb>
        </div>
        <div className="row" id="blog" style={{ marginTop: '3%',marginLeft:'0px',marginRight:'0px' }}>
        <div className="col-md-1"></div>
          <div className="col-md-10">
 
            <h1 className="blogHeading">{oneposts[0] ? oneposts[0].signname : ''}</h1>
            
            {oneposts[0] ? <div dangerouslySetInnerHTML={{ __html: oneposts[0].description }}></div> : ''}
            
           
            
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

export default Expert_content;
