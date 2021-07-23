import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../scss/App.scss';
import '../scss/font.scss';
import '../scss/about.scss';
import '../scss/blog.scss';
import fb from "../images/facebook.png";
import wp from "../images/twitter.png";
import yb from "../images/linkedin.png";
import insta from "../images/google-plus.png";
import calendar from "../images/calendar.png";
import comment from "../images/comment.png";
import ico1 from '../images/horo/ico1.png'

function Services(props) {

  const [posts, setPosts] = useState([])
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
  useEffect(() => {
    axios.post('http://localhost:4000/api/category/getservicesbasedid',{postid:props.match.params.id})
      .then(res => {
        console.log(res);
        setPosts(res.data.data)
        console.log((res.data))
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const getDate = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString([], options);
  }

  return (
    <div className="BlogScreen">
      <Navbar />
      <div className="header_image">
   
        <span className="header_text1">Services</span>
      </div>
      <div className="row" >
      <div className="col-md-1" style={{marginTop: '4%'}}></div>
      <div className="col-md-2" style={{marginTop: '4%'}}>
      <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '0px', marginLeft: '40px',marginBottom: '0px',fontSize:'20px' }}>CATEGORIES</p>
      <hr />
      {blo.map((row, index) => (
      <div>
      <a href={`/services/${row.id}`}> <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '40px',alignItems: 'left' }}>
    
      <p style={{ color: 'black', fontFamily: 'Minion Pro', marginTop: '0px',marginBottom: '0px',fontSize:'18px' }}>{row.name}</p>
  </div></a>
  <br />
  </div>
  ))
                                      
}
     
          </div>    
      <div className="col-md-9">
      <div className="Blogrow animate__animated animate__bounce" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%', flexWrap: 'wrap' }}>
        {posts.map(post => {
          return (
            <div>
              <Card style={{ width: '22rem', height: '25rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={post.imgUrl} style={{ height: 230 }} />
                <Card.Body>
                  <Card.Title className="blog_title">{post.sub_name}</Card.Title>
                  <div className="social">
                    <div className="calendar">
                      <img src={calendar} alt="calendar" />
                      <Card.Text style={{ color: 'blue' }} className="blog_content">{getDate(post.createdAt)}</Card.Text>
                    </div>
                    {/*
                    <div className="comment">
                      <img src={comment} alt="comment" />
                      <Card.Text style={{ color: 'blue' }} className="blog_content">{post.comments.length}</Card.Text>
                    </div>
                    */}
                  </div>
                  <Card.Text style={{ color: 'black' }} className="blog_content">
                    {post.content}
                  </Card.Text>
                  <div className="social">
                    <Button variant="primary" className="blog_read_more" style={{ color:'#ff7e00 !important' }}><a href={"/servicedetails/" + post.id} style={{ color: 'white', fontSize: '.8rem',background:'#ff7e00 !important' }}>Explore</a></Button>
                    <div className="icon">
                      <a href="http://www.facebook.com/sharer.php?u=https://astrokapoor.com/saturn-retrograde-2021/&amp;i=https://astrokapoor.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-17-at-10.27.22-PM-2.jpeg&amp;t=Saturn Retrograde 2021"><img src={fb} alt="fb" /></a>
                      <a href="https://twitter.com/intent/tweet?text=Saturn Retrograde 2021&amp;url=https://astrokapoor.com/saturn-retrograde-2021/"><img src={wp} alt="wp" /></a>
                      <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://astrokapoor.com/saturn-retrograde-2021/&amp;title=Saturn Retrograde 2021"><img src={yb} alt="insta" /></a>
                      <a href="https://plus.google.com/share?url=https://astrokapoor.com/saturn-retrograde-2021/"><img src={insta} alt="yb" /></a>

                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
