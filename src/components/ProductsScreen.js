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

function ProductsScreen() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.post('http://localhost:4000/api/product/getAllproductimage')
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
        <span className="header_text1">Products</span>
      </div>
      <div className="Blogrow animate__animated animate__bounce" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%', flexWrap: 'wrap' }}>
        {posts.map(post => {
          return (
            <div>
              <Card style={{ width: '29rem', height: '29rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={post.Imageurl} style={{ height: 250 }} />
                <Card.Body>
                  <Card.Title className="blog_title">{post.productname}</Card.Title>
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
                    <Button variant="primary" className="blog_read_more" style={{ color:'#ff7e00 !important' }}><a href={"/products/" + post.id} style={{ color: 'white', fontSize: '.8rem',background:'#ff7e00 !important' }}>Explore</a></Button>
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
      <Footer />
    </div>
  );
}

export default ProductsScreen;
