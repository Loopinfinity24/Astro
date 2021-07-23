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

function Sunsigns(props) {

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
                
                <title>{oneposts[0] ? oneposts[0].seotitle : 'Astrokapoor Hoeoscope'}</title>
                <meta name="title" content={oneposts[0] ? oneposts[0].seotitle : ''}/>
                <meta name="description" content={oneposts[0] ? oneposts[0].seometadesc : ''} />
                <meta name="keywords" content={oneposts[0] ? oneposts[0].focusseoword : ''} />
               
            </Helmet>

        {/* {posts.map(post => { 
        return(
        <div> */}
        <div className="header_image">
        
           <span className="header_text1">Horoscope</span>
       
          <Breadcrumb className="header_text2" style={{float:'right',marginRight:'50%',height:'100px',marginTop:'-106px',fontSize:'23px'}}>
            <Breadcrumb.Item href="/" style={{color:'#f59042'}}>Home/ </Breadcrumb.Item>
            <Breadcrumb>
            {oneposts[0] ? oneposts[0].signname : ''}
            </Breadcrumb>
            </Breadcrumb>
        </div>
        <div className="row" id="blog" style={{ marginTop: '3%',marginLeft:'0px',marginRight:'0px' }}>
        <div className="col-md-1"></div>
          <div className="col-md-6">
 
            <h1 className="blogHeading">{oneposts[0] ? oneposts[0].signname : ''}</h1>
            
            {oneposts[0] ? <div dangerouslySetInnerHTML={{ __html: oneposts[0].description }}></div> : ''}
            
           
            
             </div>
             <div className="col-md-1"></div>
             <div className="col-md-3">
                        <a href="/sunsign/Aries"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico1} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%', marginTop: '10px' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '30px' }}>Aries (Mar 21 - Apr 19)</p>
                        </div></a>
                        <hr />
                        <a href="/sunsign/Taurus"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico2} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}> Taurus (Apr 20 - May 20)</p>
                        </div></a>
                        <hr />
                        <a href="/sunsign/Gemini"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico3} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Gemini (May 21 - Jun 20)</p>
                        </div></a>
                        <hr />
                        <a href="/sunsign/Cancer"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico4} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Cancer (Jun 21 - Jul 22)</p>
                        </div></a>
                        <hr />
                        <a href="/sunsign/Leo"><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico5} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Leo (Jul 23 - Aug 22)</p>
                        </div></a>
                        <hr />
                        <a href="/sunsign/Virgo"><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico6} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Virgo (Aug 23 - Sep 22)</p>
                        </div></a>
                        <hr />
                        <a href="/sunsign/Libra"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico7} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Libra (Sep 23 - Oct 22)</p>
                        </div></a>
                        <hr />
                        <a href="/sunsign/Scorpio"><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico8} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Scorpio (Oct 23 - Nov 21)</p>
                        </div></a>
                        <hr />
                        <a href="/sunsign/Sagittarius"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico9} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}> Sagittarius (Nov 22 - Dec 21)</p>
                        </div></a>
                        <hr />
                        <a href="/sunsign/Capricorn"><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico10} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Capricorn (Dec 22 - Jan 19)</p>
                        </div></a>
                        <hr />
                        <a href="/sunsign/Aquarius"><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico11} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}> Aquarius (Jan 20 - Feb 18)</p>
                        </div></a>
                        <hr />
                        <a href="/sunsign/Pisces"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', textAlign: 'center' }}>
                            <img src={ico12} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%', marginBottom: '30px' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginBottom: '30px', marginTop: '10px' }}>Pisces (Feb 19 - Mar 20)</p>
                        </div></a>
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

export default Sunsigns;
