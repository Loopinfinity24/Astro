import React, { useState } from 'react'
import axios from 'axios'
import '../scss/contact.scss'
import '../scss/font.scss'
import '../scss/App.scss'
import '../scss/resets.scss'
import location from '../images/location.png'
import phone from '../images/telephone.png'
import email from '../images/email.png'
import Navbar from './Navbar';
import Footer from './Footer';
import { Form, Col, Button } from 'react-bootstrap'

function Contactus() {
  const url = "http://localhost:8080/api/consultation"
  const [consultent, setConsultent] = useState({
    birthHour: "",
    birthPlace: "",
    dob: "",
    option1: "",
    mobileNumber: "",
    email: "",
    name: ""
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
      })
  }

  function handle(e) {
    const newData = { ...consultent }
    newData[e.target.id] = e.target.value
    setConsultent(newData)
    console.log(newData)
  }


  return (
    <div className="contactus">
      <Navbar />
      <div className="map">
        <iframe className="map_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.419379483269!2d77.40807491440384!3d28.49702749695317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce85a341ae40b%3A0x2b31a49249848b1!2sLotus%20Zing%20Tower-15%2C%20Chhaprauli%20Bangar%2C%20Sector%20168%2C%20Noida%2C%20Uttar%20Pradesh%20201305!5e0!3m2!1sen!2sin!4v1620833611186!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div className="contact1">
        <div className="office1">
          <h2 className="office-heading" >Head Office</h2>
          <p>Mr. Prashant Kapoor Astrologer</p>
          <div className="info">
            <div className="address">
              <img src={location} alt="location" width="30" height="30" />
              <div className="add">
                <p className="heading">Address :</p>
                <p className="para"> 1103 Tower-15 Lotus Zing,<br />
                  Noida Sec-168<br />
                  Uttar Pradesh – 201305 </p>
              </div>
            </div>
            <div className="phone">
              <img src={phone} alt="phone" width="30" height="30" />
              <div className="add">
                <p className="heading">Phone Number :</p>
                <p className="para"> +91-9911373368 </p>
              </div>
            </div>

            <div className="email">
              <img src={email} alt="email" width="30" height="30" />
              <div className="add">
                <p className="heading">Email :</p>
                <p className="para">admin@astrokapoor.com </p>
              </div>
            </div>
          </div>

        </div>
        <div className="office2">
          <h2 className="office-heading">Regional Head Office</h2>
          <p>Mr. Vipin Kapoor Astrologer</p>
          <div className="info">
            <div className="address">
              <img src={location} alt="location" width="30" height="30" />
              <div className="add">
                <p className="heading">Address :</p>
                <p className="para"> Vill. – Jole, PO. – Bumbloo<br />
                  Teh. – Barsar Distt. – Hamirpur<br />
                  Himachal Pradesh, Pin- 177119<br />
                  India </p><br />
              </div>
            </div>
            <div className="phone">
              <img src={phone} alt="phone" width="30" height="30" />
              <div className="add">
                <p className="heading">Phone Number :</p>
                <p className="para"> +91-9910095568, +91-9911373368 </p>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="contact2">
        <div className="office3">
          <h2 className="office-heading">Noida</h2>
          <p>Astrologer Prashant Kapoor</p>
          <div className="info">
            <div className="address">
              <img src={location} alt="location" width="30" height="30" />
              <div className="add">
                <p className="heading">Address :</p>
                <p className="para">Astrologer Prashant Kapoor<br />
                  “Little Heights”<br />
                  (Opp. Mansarovar Aptts.)<br />
                  Sec-53 Noida 201304<br />
                  Uttar Pradesh – India </p>
              </div>
            </div>
            <div className="phone">
              <img src={phone} alt="phone" width="30" height="30" />
              <div className="add">
                <p className="heading">Phone Number :</p>
                <p className="para">+91-9911373368 </p>
              </div>
            </div>
          </div>

        </div>
        <div className="office4">
          <h2 className="office-heading">USA</h2>
          <p>Astrologer Prashant Kapoor</p>
          <div className="info">
            <div className="address">
              <img src={location} alt="location" width="30" height="30" />
              <div className="add">
                <p className="heading">Address :</p>
                <p className="para"> 3032 West Schubert StreT<br />
                  Chicago, IL<br />
                  USA Pincode: 60647 </p>
              </div>
            </div>
            <div className="phone">
              <img src={phone} alt="phone" width="30" height="30" />
              <div className="add">
                <p className="heading">Phone Number :</p>
                <p className="para">+1-5732020876 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="contact3">
        <div className="office5">
          <h2 className="office-heading">Himachal Pradesh</h2>
          <p>Astrologer Prashant Kapoor</p>
          <div className="info">
            <div className="address">
              <img src={location} alt="location" width="30" height="30" />
              <div className="add">
                <p className="heading">Address :</p>
                <p className="para"> Astrologer Vipin Kapoor<br />
                  29 Green Avenue Estate<br />
                  Rakkar Colony<br />
                  Distt. – Una<br />
                  Himachal Pradesh – 174303<br />
                  India </p>
              </div>
            </div>
            <div className="phone">
              <img src={phone} alt="phone" width="30" height="30" />
              <div className="add">
                <p className="heading">Phone Number :</p>
                <p className="para"> +91-9911373368 </p>
              </div>
            </div>
          </div>

        </div>
        <div className="office6">
          <h2 className="office-heading">Gurgaon</h2>
          <p>Astrologer Prashant Kapoor</p>
          <div className="info">
            <div className="address">
              <img src={location} alt="location" width="30" height="30" />
              <div className="add">
                <p className="heading">Address :</p>
                <p className="para">Astrologer Prashant Kapoor<br />
                  D 7024<br />
                  Devinder Vihar, Gurgaon<br />
                  Pincode – 122011 Haryana<br />
                  India</p>
              </div>
            </div>
            <div className="phone">
              <img src={phone} alt="phone" width="30" height="30" />
              <div className="add">
                <p className="heading">Phone Number :</p>
                <p className="para">+9910095568, +9911373368 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="contact4">
        <div className="office7">
          <h2 className="office-heading">Mumbai</h2>
          <p>Astrologer Prashant Kapoor</p>
          <div className="info">
            <div className="address">
              <img src={location} alt="location" width="30" height="30" />
              <div className="add">
                <p className="heading">Address :</p>
                <p className="para">
                  004 GF Wing-C Shivalik Building<br />
                  Militery Road Andheri East<br />
                  Mumbai-400059 Maharashtra<br />
                  India</p>
              </div>
            </div>
            <div className="phone">
              <img src={phone} alt="phone" width="30" height="30" />
              <div className="add">
                <p className="heading">Phone Number :</p>
                <p className="para">+9910095568, +9911373368 </p>
              </div>
            </div>
          </div>

        </div>
        <div className="office8">
          <h2 className="office-heading">Get Free Guidance</h2>
          <Form onSubmit={(e) => submit(e)}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Name" id="name" required value={consultent.name} onChange={(e) => handle(e)} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control type="email" placeholder="Email" id="email" value={consultent.email} onChange={(e) => handle(e)} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Mobile No." id="mobileNumber" value={consultent.mobileNumber} onChange={(e) => handle(e)} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Gender" id="option1" value={consultent.option1} onChange={(e) => handle(e)} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control type="date" placeholder="Date of Birth" id="dob" value={consultent.dob} onChange={(e) => handle(e)} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Birth Place" id="birthPlace" value={consultent.birthPlace} onChange={(e) => handle(e)} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Birth Hour" id="birthHour" value={consultent.birthHour} onChange={(e) => handle(e)} />
              </Form.Group>

            </Form.Row>
            <Button variant="primary" onSubmit={(e) => submit(e)} type="submit">
              Submit
            </Button>
          </Form>

        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contactus;